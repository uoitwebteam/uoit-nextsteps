function MainCtrl
  ($window, $scope, $stateParams, $timeout, $document, $http,
  GeolocationService,
  DatastoreService, ConfigstoreService, store) {
	'ngInject';

  // ViewModel
  const vm = this;
  const s = $scope;
  const polonsky = [43.945127,-78.89683];
  const date = new Date();
  s.level = $stateParams.l == 105 ? 105 : 101;

  s.userLocation = {
    code: 'user',
    locating: false,
    allowed: null,
    coords: polonsky,
    date: date,
    name: '',
    place: ''
  };

  s.video = {
    visible: false,
    blurred: false,
    sources: {
      p480: [
        ['images/NextSteps_480p.webm', 'video/webm'],
        ['images/NextSteps_480p.mp4', 'video/mp4']
      ],
      p720: [
        ['images/NextSteps_720p.webm', 'video/webm'],
        ['images/NextSteps_720p.mp4', 'video/mp4']
      ]
    },
    addSources: function(res) {
      var source = document.createElement('source');
      source.src = this.sources[res][0][0];
      source.type = this.sources[res][0][1];
      document.getElementById('bgVid').appendChild(source);
    }
  }

  if ($window.matchMedia('(min-width: 1920px)').matches) {
    s.video.addSources('p720');
    s.mobile = false;
  } else if ($window.matchMedia('(min-width: 768px)').matches) {
    s.video.addSources('p480');
    s.mobile = false;
  } else {
    s.mobile = true;
  }

  s.alert = {
    active: false,
    shown: false,
    show: function() {
      if (!this.active) {
        var self = this;
        self.active = true;
        self.shown = true;
        return $timeout(angular.noop, 5000).then(function() {
          self.active = false;
        });
      }
    },
    close: function() {
      this.active = false;
    }
  }

  var easings = {
    easeOutCirc: function(t) { const t1 = t - 1; return Math.sqrt( 1 - t1 * t1 ); }
  }
  function scrollTo($section, offset, dur, ease) {
    $document.scrollToElementAnimated($section, offset, dur, ease);
  }

  function slugifyNodes(nodes, toslug) {
    angular.forEach(nodes, function(v) {
      v.anchor = vm.navMenu.slugify(v[toslug]);
      var toslug2 = toslug+'2';
      if (v[toslug2]) { v.anchor2 = vm.navMenu.slugify(v[toslug2]); }
      if (v.nodes) { slugifyNodes(v.nodes, toslug); }
    });
  }

  vm.navMenu = ConfigstoreService.get('navMenu');
  slugifyNodes(vm.navMenu.nodes, 'title');


  vm.map = {};
  vm.mapOptions = {};
  vm.mapMarkers = [];
  vm.markerOptions = {};
  vm.windowOptions = {
    boxClass: 'info-window',
    disableAutoPan: true
  };

  vm.mapVisible = false;
  var mapApi;
  var mapRef;

  function getCentreAvg(points) {
    var lats = points.map(function(item) {
        var lat = item.coords[0];
        return lat;
    });
    var longs = points.map(function(item) {
        var long = item.coords[1];
        return long;
    });
    function getAvg(coords) {
      var sum = coords.reduce((a, b) => a + b, 0);
      var avg = sum / coords.length;
      return avg;
    }
    return { latitude: getAvg(lats), longitude: getAvg(longs) };
    //console.log( [getAvg(lats), getAvg(longs)] );
  }

  var lastPoint;
  vm.updateLocations = function(point, $inview) {
    if (point.highlight) {
      point.highlight.active = $inview;
      if (!vm.map.static) {
        if (point.highlight.active) {
          vm.map.transformClass = point.highlight.transformClass;
          vm.map.zoom = point.highlight.zoom;
          if (point.highlight.locations && point.highlight.locations !== vm.mapMarkers) {
            vm.markerOptions = { animation: mapApi.Animation.DROP, icon: point.highlight.marker };
            vm.map.center = getCentreAvg(point.highlight.locations);
            vm.mapMarkers = point.highlight.locations;
          }
          lastPoint = point.highlight;
        } else {
          vm.map.transformClass = lastPoint.transformClass;
          vm.map.zoom = lastPoint.zoom;
          if (lastPoint.locations) {
            vm.mapMarkers = lastPoint.locations;
          } else {
            vm.mapMarkers = [];
          }
        }
      }
    }
  }
  // vm.showPointDetail = function(marker, ev, model, args) {
  //   //console.log(marker, ev, model, args);
  // }

  vm.setSequence = function(seq, step, val, i) {
    if (i) {
      vm.sequence[seq][step][i] = val;
    } else {
      vm.sequence[seq][step] = val;
    }
  }
  vm.sequence = [{
  	init: false, // permanent switch
  	logo: false, // uoit logo slide down
  	heading: false, // cta text flip in
  	cta: false, // cta button slide up
  	globe: [false, false, false], // gmap fade on, location msg
  	location: false // location resolved
  },{
    init: false,
  	title: false
  },{
    titles: []
  },{
    attach: false,
    unattach: false
  },{
    sas: []
  }];

  vm.initSequence = function() {
  	if (vm.sequence[0].init === false) {
			vm.sequence[0].init = true;
			vm.sequence[0].logo = true;
			return $timeout(angular.noop, 2000).then(function() {
				vm.sequence[0].logo = false;
				vm.sequence[0].heading = true;
		    return $timeout(angular.noop, 1000);
		  }).then(function() {
	  		vm.sequence[0].cta = true;
		    return $timeout(angular.noop, 120 * 1000);
		  });
  	}
  }

  vm.initSequence2 = function() {
  	vm.sequence[0].globe[0] = true;
    vm.mapVisible = true;
  	return $timeout(angular.noop, 1000).then(function() {
      s.video.blurred = true;
  		vm.sequence[0].globe[1] = true;
	  });
  }

  function ticker(start, end, increment, interval, tick) {
    var counter = start;
    var token = setInterval(function(){
      if (counter >= end) {
        clearInterval(token);
      } else {
        counter = counter + increment;
        tick(counter);
        // console.log(counter);
      }
    }, interval);
    return token;
  }

  vm.captureUserLocation = function() {
    s.userLocation.locating = true;
    var token = ticker(-90, 90, 1, 60, function(counter) {

      $scope.$apply(function(){
        vm.map.center = { 
          latitude: 45,
          longitude: counter
        };
      });

    });

    GeolocationService
    .getCurrentPosition()
    .then(function(data){
      s.userLocation.locating = false;
      s.userLocation.allowed = true;
      s.userLocation.coords = [data.coords.latitude, data.coords.longitude];
      vm.map.center = { 
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
      };

      //console.log(data, s.userLocation);
      clearInterval(token);
		  vm.initSequence3();

  	}, function(error) {
		  s.userLocation = {
        locating: false,
		  	allowed: false,
		  	coords: polonsky,
        error: error
		  };
      clearInterval(token);
  	});
  }

  vm.initSequence3 = function() {

      // vm.map.zoom = 4;
      // vm.sequence[0].globe[1] = false;
      // vm.sequence[0].globe[2] = true;
      // s.video.blurred = false;
      // return $timeout(angular.noop, 1000).then(function(){
      //   vm.sequence[0].location = true;
      //   vm.mapVisible = !s.mobile;
      //   mapApi.event.trigger(mapRef, 'resize');
      //   return $timeout(angular.noop, 1000);
      // }).then(function(){
        scrollTo(angular.element(document.getElementById('welcome')), 0, 2000, easings.easeOutCirc);
        // return $timeout(angular.noop, 2000);
      $timeout(angular.noop, 2000).then(function() {
     //    mapApi.event.trigger(mapRef, 'resize');
		  	// vm.map.zoom = 17;
     //    vm.map.center = { 
     //      latitude: polonsky[0],
     //      longitude: polonsky[1]
     //    };
        vm.sequence[1].init = true;
		  });
  }

  var storedChecklist2 = store.get('section2months');
  var storedChecklist3 = store.get('section3months');
  vm.section2months = DatastoreService.get('section2months');
  vm.section3months = DatastoreService.get('section3months');

  if (storedChecklist2) {
    angular.forEach(storedChecklist2, function(val, key){
      var month = key;
      angular.forEach(val.points, function(v, k){
        var point = k;
        if (v && v.hasOwnProperty('complete') && vm.section2months[month].points[point]) {
          vm.section2months[month].points[point].complete = v.complete;
        }
      });
    });
  }
  if (storedChecklist3) {
    angular.forEach(storedChecklist3, function(val, key){
      var month = key;
      angular.forEach(val.points, function(v, k){
        var point = k;
        if (v && v.hasOwnProperty('complete') && vm.section3months[month].points[point]) {
          vm.section3months[month].points[point].complete = v.complete;
        }
      });
    });
  }

  vm.checklist = {
    total: 9,
    count: 0,
    toggle: function(state) {
      s.alert.show();
      store.set('section2months', vm.section2months);
      store.set('section3months', vm.section3months);
      if (state === false) {
        this.count--;
      } else {
        this.count++;
      }
    }
  }
  vm.facultyList = DatastoreService.get('facultyList');
  slugifyNodes(vm.facultyList, 'name');
  vm.smartstartList = DatastoreService.get('smartstartList');

  vm.attachHeader = function($inview, $inviewpart) {
    if ($inview === true) {
      if ($inviewpart == 'neither' && $inviewpart != 'bottom') {
        vm.sequence[3].attach = true;
      } else if ($inviewpart == 'bottom') {
        vm.sequence[3].unattach = !$inview;
      } else {
        vm.activeBg = -1;
        vm.sequence[3].attach = false;
      }
    } else {
      vm.sequence[3].unattach = false;
      vm.sequence[3].attach = false;
    }
  }

  s.updateBg = function($inview, $inviewpart, $index) {
    if ($inview && $inviewpart == 'both') {
      vm.activeBg = $index;
    }
  }

  vm.attachMap = function($inview, $inviewpart) {
    if ($inview === true) {
    $scope.video.visible = true;
      if (!vm.map.static && $inview && $inviewpart == 'bottom') {
        vm.map.static = true;
        vm.mapMarkers = [];
        vm.markerOptions = { animation: mapApi.Animation.DROP, icon: 'images/icons/marker_alt.svg' };
          //mapApi.event.trigger(mapRef, 'resize');
        return $timeout(angular.noop, 100).then(function(){
          vm.map.zoom = 1;
          //mapApi.event.trigger(mapRef, 'resize');
          return $timeout(angular.noop, 1000);
        }).then(function(){
          mapApi.event.trigger(mapRef, 'resize');
          vm.map.zoom = 2;
          vm.map.center = { 
            latitude: s.userLocation.coords[0],
            longitude: s.userLocation.coords[1]
          };
          vm.mapMarkers.push(s.userLocation);
          return $timeout(angular.noop, 1000);
        }).then(function() {
          $http({
            method: 'GET',
            url: 'http://admissions.uoit.ca/nextsteps/_db.php'
          }).then(function(response) {
            //console.log(response.data);
            angular.forEach(response.data, function(v) {
              vm.mapMarkers.push(v);
            });
          }, function(response) {
            console.log(response);
          });
        });
      }
    }
  }
  
  var addedLocation = store.get('addedLocation');
  vm.addedLocation = addedLocation ? addedLocation : false;
  s.addLocation = function(noname = false) {
    vm.addedLocation = 'locating';
    var post = {
      allowed: true,
      lat: s.userLocation.coords[0],
      lng: s.userLocation.coords[1],
      date: s.userLocation.date
    }
    if (!noname) {
      post.name = s.userLocation.name;
    }
    $http({
      method: 'POST',
      url: 'http://admissions.uoit.ca/nextsteps/_db.php',
      data: post
    }).then(function(response) {
      vm.addedLocation = true;
      console.log(response);
      //store.set('addedLocation', true);
    }, function() {
      vm.addedLocation = 'failed';
    });
  }
  s.removeMarker = function() {
    vm.mapMarkers.splice(0, 1);
    s.userLocation.allowed = false;
    vm.addedLocation = true;
  }

}

export default {
  name: 'MainCtrl',
  fn: MainCtrl
};
