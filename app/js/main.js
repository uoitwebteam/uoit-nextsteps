// angular core
import angular from 'angular';
// app modules
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';

// dependencies
import 'angular-sanitize';
import 'angular-cookies';
import 'angular-storage';
import 'angular-scroll';
import 'angular-inview';
import 'angular-simple-logger';
import 'angular-ui-router';
import 'angular-responsive-images/src/angular-responsive-images';

// app components
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

import { ChecklistModule } from '../components/checklist/checklist';

// create and bootstrap application
const requires = [
	'ngSanitize',
  'ngCookies',
  'angular-storage',
	'angular-inview',
  'duScroll',
  'bhResponsiveImages',
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
  'app.directives',
  ChecklistModule
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);


angular.bootstrap(document, ['app'], {
  strictDi: true
});
