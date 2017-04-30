export const AppComponent = {
  restrict: 'E',
  templateUrl: 'app.component.html',
  controller: class AppController {
  	constructor(
	  	$window,
	  	$timeout,
	  	$document,
	  	$stateParams,
	  	DatastoreService,
	  	SlugifyService,
	  	MatchMediaService,
	  ) {
			'ngInject';
		  this.$window = $window;
		  this.$timeout = $timeout;
		  this.$document = $document;
		  this.$stateParams = $stateParams;
		  this.DatastoreService = DatastoreService;
		  this.SlugifyService = SlugifyService;
		  this.MatchMediaService = MatchMediaService;

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

		  this.MatchMediaService
			  .when('(min-width: 0)', () => {
			    this.isMobile = true;
			    this.sources = this.videoSources.p480;
			  })
			  .when('(min-width: 1024px)', () => {
			    this.isMobile = false;
			  })
			  .when('(min-width: 1920px)', () => {
			    this.sources = this.videoSources.p720;
			  })

		  this.stickyHeader = {
		    attach: false,
		    unattach: false
		  };

		  this.sections = [false, false, false, false, false, false, false, false];

		  this.initChecklist(this.checklistNames.section2);
		  this.initChecklist(this.checklistNames.section3);
		  this.initChecklist(this.checklistNames.section4, 'name');
		  this.initChecklist(this.checklistNames.section5);


		  this.sequence = {
		  	init: false, // permanent switch
		  	logo: false, // uoit logo slide down
		  	heading: false, // cta text flip in
		  	cta: false, // cta button slide up
		  };
		  this.initSequence(this);
		}

	  initSequence({ sequence }) {
	  	if (sequence.init === false) {
				sequence.init = true;
				sequence.logo = true;
				return this.$timeout(() => {
					sequence.logo = false;
					sequence.heading = true;
				}, 2000).then(() => this.$timeout(() => {
		  		sequence.cta = true;
		  	}, 1000));
	  	}
	  }

	  scrollTo(id) {
	  	const el = angular.element(document.getElementById(id));
	    this.$document.scrollToElementAnimated(el, 0, 2000, t => {
	    	const t1 = t - 1;
	    	return Math.sqrt( 1 - t1 * t1 );
	    });
	  }

	  attachHeader($inview, { parts }) {
	    if ($inview) {
	      if (!parts.top && !parts.bottom) {
	        this.stickyHeader.attach = true;
	      } else if (parts.bottom) {
	        this.stickyHeader.unattach = true;
	      } else {
	        this.stickyHeader.attach = false;
	      }
	    } else {
	      this.stickyHeader.unattach = false;
	      this.stickyHeader.attach = false;
	    }
	  }

		initChecklist(listName, slug = false) {
			// switch to .getConstant(listName) for local copy
		  this.DatastoreService.get(listName).then(list => {
		  	this[listName] = list;
			  if (slug) this.SlugifyService.process(this[listName], slug);
		  });
		}

  }
};