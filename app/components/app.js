// angular core
import angular from 'angular';

// dependencies
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';
import ngStorage from 'angular-storage';
import duScroll from 'angular-scroll';
import uiRouter from 'angular-ui-router';
import 'angular-responsive-images/src/angular-responsive-images';
import 'angular-inview';

import { PageSectionModule } from './page-section/page-section';
import { PageNavModule } from './page-nav/page-nav';
import { ChecklistModule } from './checklist/checklist';
import { BgVideoModule } from './bg-video/bg-video';
import { ParallaxModule } from './parallax/parallax';
import { CommonModule } from './common/common';

import { AppComponent } from './app.component';

// create and bootstrap application
const requires = [
	ngSanitize,
  ngCookies,
  ngStorage,
  duScroll,
  uiRouter,
	'angular-inview',
  'bhResponsiveImages',
  PageSectionModule,
  PageNavModule,
  ChecklistModule,
  BgVideoModule,
  ParallaxModule,
  CommonModule
];

angular.module('app', requires)
	.component('app', AppComponent)
	.config(($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) => {
	  'ngInject';

	  if (process.env.NODE_ENV === 'production') {
	    $compileProvider.debugInfoEnabled(false);
	  }

	  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false
	  });

	  $stateProvider
	  .state('Home', {
	    url: '/?l',
	    component: 'app',
	    title: 'Home'
	  });

	  $urlRouterProvider.otherwise('/');
	})
	.run(($rootScope) => {
	  'ngInject';
	  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
	  });
	});


angular.bootstrap(document, ['app'], {
  strictDi: true
});
