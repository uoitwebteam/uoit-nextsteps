import angular from 'angular';

import { PageNavComponent } from './page-nav.component';

export const PageNavModule = angular.module('pageNav', [])
	.component('pageNav', PageNavComponent)
	.name;