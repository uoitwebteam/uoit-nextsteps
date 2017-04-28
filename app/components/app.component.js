export const AppComponent = {
  restrict: 'E',
  templateUrl: 'app.component.html',
  controller: class AppController {
  	constructor($window, $scope, $timeout, $document, $http, $stateParams, DatastoreService, SlugifyService, store) {
			'ngInject';
		  this.$window = $window;
		  this.$scope = $scope;
		  this.$timeout = $timeout;
		  this.$document = $document;
		  this.$http = $http;
		  this.$stateParams = $stateParams;
		  this.DatastoreService = DatastoreService;
		  this.SlugifyService = SlugifyService;
		  this.store = store;

		  this.level = $stateParams.l == 105 ? 105 : 101;

		  this.checklistNames = {
		  	section2: 'section2months',
		  	section3: 'section3months',
		  	section4: 'facultyList',
		  	section5: 'smartstartList'
		  };

		  this.videoSources = {
	      p480: [{
	      	src: 'images/NextSteps_480p_VBR1_1200.webm',
	      	type: 'video/webm'
	      },{
	      	src: 'images/NextSteps_480p_VBR1_1200.mp4',
	      	type: 'video/mp4'
	      }],
	      p720: [{
	      	src: 'images/NextSteps_720p_VBR1_2000.webm',
	      	type: 'video/webm'
	      },{
	      	src: 'images/NextSteps_720p_VBR1_2000.mp4',
	      	type: 'video/mp4'
	      }],
	      fallback: 'images/UA_Link_low.gif'
		  }

		  $scope.$watch(
		  	this.getViewportWidth.bind(this),
		  	this.checkAndSetMobile.bind(this)
		  );

		  this.sequence = [{
		  	init: false, // permanent switch
		  	logo: false, // uoit logo slide down
		  	heading: false, // cta text flip in
		  	cta: false, // cta button slide up
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

		  this.sections = [false, false, false, false, false, false, false, false];

		  this.initChecklist(this.checklistNames.section2);
		  this.initChecklist(this.checklistNames.section3);
		  this.initChecklist(this.checklistNames.section4, 'name');
		  this.initChecklist(this.checklistNames.section5);

		  this.initSequence();
		}

	  initSequence() {
	  	if (this.sequence[0].init === false) {
				this.sequence[0].init = true;
				this.sequence[0].logo = true;
				return this.$timeout(() => {
					this.sequence[0].logo = false;
					this.sequence[0].heading = true;
				}, 2000).then(() => this.$timeout(() => {
		  		this.sequence[0].cta = true;
		  	}, 1000));
	  	}
	  }

		setSequence(seq, step, val, i) {
	    if (i) {
	      this.sequence[seq][step][i] = val;
	    } else {
	      this.sequence[seq][step] = val;
	    }
	  }

	  scrollTo(id) {
	  	const el = angular.element(document.getElementById(id));
	    this.$document.scrollToElementAnimated(el, 0, 2000, t => {
	    	const t1 = t - 1;
	    	return Math.sqrt( 1 - t1 * t1 );
	    });
	  }

	  attachHeader($inview, $inviewInfo) {
	    if ($inview === true) {
	      if (!$inviewInfo.parts.top && !$inviewInfo.parts.bottom) {
	        this.sequence[3].attach = true;
	      } else if ($inviewInfo.parts.bottom) {
	        this.sequence[3].unattach = true;
	      } else {
	        this.activeBg = -1;
	        this.sequence[3].attach = false;
	      }
	    } else {
	      this.sequence[3].unattach = false;
	      this.sequence[3].attach = false;
	    }
	  }

		mergeChecklist(constant, stored) {
		  angular.forEach(stored, function(val, key){
		    var month = key;
		    angular.forEach(val.points, function(v, k){
		      var point = k;
		      if (v && v.hasOwnProperty('complete') && constant[month].points[point]) {
		        constant[month].points[point].complete = v.complete;
		      }
		    });
		  });
		}

		initChecklist(listName, slug = false) {
		  const storedList = this.store.get(listName);
		  this[listName] = this.DatastoreService.get(listName);

		  if (storedList) this.mergeChecklist(this[listName], storedList);
		  if (slug) this.SlugifyService.process(this[listName], slug);
		}

		getViewportWidth(){
		  if (this.$window.matchMedia('(min-width: 1920px)').matches) {
		    return 1920;
		  } else if (this.$window.matchMedia('(min-width: 1024px)').matches) {
		    return 1024;
		  } else {
		    return 0;
		  }
	  }

	  checkAndSetMobile(value) {
	    this.$scope.mobile = (value === 0);
	    this.sources = (value === 1920) ? this.videoSources.p720 : this.videoSources.p480;
	  }

  }
};