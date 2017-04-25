// angular core
import angular from 'angular';
// app modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';

// dependencies
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';
import ngStorage from 'angular-storage';
import duScroll from 'angular-scroll';
import uiRouter from 'angular-ui-router';
import 'angular-responsive-images/src/angular-responsive-images';
import 'angular-inview';

// app components
import './templates';
import './filters';
import './controllers';
import './services';

import { ChecklistModule } from '../components/checklist/checklist';
import { BgVideoModule } from '../components/bg-video/bg-video';
import { ParallaxModule } from '../components/parallax/parallax';

// create and bootstrap application
const requires = [
	ngSanitize,
  ngCookies,
  ngStorage,
  duScroll,
  uiRouter,
	'angular-inview',
  'bhResponsiveImages',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  ChecklistModule,
  BgVideoModule,
  ParallaxModule
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);


angular.bootstrap(document, ['app'], {
  strictDi: true
});
