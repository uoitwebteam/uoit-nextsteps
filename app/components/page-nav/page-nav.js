import angular from 'angular';

import { PageNavComponent } from './page-nav.component';
import { PageNavConstant } from './page-nav.constant';

export const PageNavModule = angular.module('pageNav', [])
	.constant('PageNav', PageNavConstant)
	.component('pageNav', PageNavComponent)
	.name;