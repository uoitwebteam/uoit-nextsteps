export const AppComponent = {
  restrict: 'E',
  controllerAs: 'home',
  controller: class AppController {
  	constructor($window, $scope, $stateParams, $timeout, $document, $http, DatastoreService, ConfigstoreService, store) {
			'ngInject';
		  // ViewModel
		  const vm = this;
		  const s = $scope;
		  const polonsky = [43.945127,-78.89683];
		  const date = new Date();
		  vm.level = $stateParams.l == 105 ? 105 : 101;

		  vm.checklistNames = {
		  	section2: 'section2months',
		  	section3: 'section3months',
		  	section4: 'facultyList',
		  	section5: 'smartstartList'
		  };

		  s.video = {
		    visible: false,
		    sources: {
		      p480: [{
		      	src: 'images/NextSteps_480p.webm',
		      	type: 'video/webm'
		      },{
		      	src: 'images/NextSteps_480p.mp4',
		      	type: 'video/mp4'
		      }],
		      p720: [{
		      	src: 'images/NextSteps_720p.webm',
		      	type: 'video/webm'
		      },{
		      	src: 'images/NextSteps_720p.mp4',
		      	type: 'video/mp4'
		      }],
		      fallback: 'images/UA_Link_low.gif' 
		    }
		  }

		  $scope.$watch(() => {
			  if ($window.matchMedia('(min-width: 1920px)').matches) {
			    return 1920;
			  } else if ($window.matchMedia('(min-width: 768px)').matches) {
			    return 768;
			  } else {
			    return 0;
			  }
		  }, value => {
		    s.mobile = (value === 0);
		    vm.sources = (value === 1920) ? s.video.sources.p720 : s.video.sources.p480;
		  });

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
		  	title: false,
		  	parallax: 0
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
					return $timeout(() => {
						vm.sequence[0].logo = false;
						vm.sequence[0].heading = true;
					}, 2000).then(() => $timeout(() => {
			  		vm.sequence[0].cta = true;
			  	}, 1000));
		  	}
		  }

		  vm.initSequence3 = function() {
		    scrollTo(angular.element(document.getElementById('welcome')), 0, 2000, easings.easeOutCirc);
		    return $timeout(() => {
		      vm.sequence[1].init = true;
			  }, 2000);
		  }

		  const storedChecklist2 = store.get(vm.checklistNames.section2);
		  const storedChecklist3 = store.get(vm.checklistNames.section3);
		  vm[vm.checklistNames.section2] = DatastoreService.get(vm.checklistNames.section2);
		  vm[vm.checklistNames.section3] = DatastoreService.get(vm.checklistNames.section3);

		  if (storedChecklist2) {
		    angular.forEach(storedChecklist2, function(val, key){
		      var month = key;
		      angular.forEach(val.points, function(v, k){
		        var point = k;
		        if (v && v.hasOwnProperty('complete') && vm[vm.checklistNames.section2][month].points[point]) {
		          vm[vm.checklistNames.section2][month].points[point].complete = v.complete;
		        }
		      });
		    });
		  }
		  if (storedChecklist3) {
		    angular.forEach(storedChecklist3, function(val, key){
		      var month = key;
		      angular.forEach(val.points, function(v, k){
		        var point = k;
		        if (v && v.hasOwnProperty('complete') && vm[vm.checklistNames.section3][month].points[point]) {
		          vm[vm.checklistNames.section3][month].points[point].complete = v.complete;
		        }
		      });
		    });
		  }

		  vm.facultyList = DatastoreService.get(vm.checklistNames.section4);
		  slugifyNodes(vm.facultyList, 'name');
		  vm.smartstartList = DatastoreService.get(vm.checklistNames.section5);

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
		}
  },
  template: `
  	<bg-video visible="video.visible" mobile="mobile" sources="home.sources" fallback="{{ ::video.sources.fallback }}"></bg-video>
		<button class="nav-btn" ng-click="home.navMenu.toggle()" ng-class="{'open': home.navMenu.open}"><span class="icon icon_menu"></span> Menu</button>
		<nav class="section-nav" ng-class="{'open': home.navMenu.open}">
			<ul class="top-list" ng-class="{'active': home.navMenu.active}">
				<li ng-repeat="item in ::home.navMenu.nodes" du-scrollspy="{{ ::item.anchor }}">
					<a href="#{{ ::item.anchor }}" title="Jump to {{ ::item.title }} section"  du-smooth-scroll ng-click="home.navMenu.open = false">
						<span class="{{ ::item.icon }}"></span> {{ ::item.title }}
					</a>
					<span class="smart-start" ng-if="item.nodes">Faculty of...</span>
					<ul ng-if="item.nodes" du-spy-context>
						<li ng-repeat="node in ::item.nodes" du-scrollspy="{{ ::node.anchor }}" offset="200">
							<a href="#{{ ::node.anchor }}" title="Jump to {{ ::node.title }} section" du-smooth-scroll ng-click="home.navMenu.open = false">
								<span class="{{ ::node.icon }}"></span> {{ ::node.title }}
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<ng-include src="'partials/_section-1.html'"></ng-include>
		<ng-include src="'partials/_section-2.html'"></ng-include>
		<ng-include src="'partials/_section-3.html'"></ng-include>
		<ng-include src="'partials/_section-4.html'"></ng-include>
		<ng-include src="'partials/_section-5.html'"></ng-include>
		<ng-include src="'partials/_section-6.html'"></ng-include>
		<ng-include src="'partials/_section-7.html'"></ng-include>
		<ng-include src="'partials/_section-8.html'"></ng-include>
		<notification></notification>`
};