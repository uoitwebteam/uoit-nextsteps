import angular from 'angular';

import { PageSectionDirective } from './page-section.directive';

export const PageSectionModule = angular.module('pageSection', [])
	.directive('pageSection', PageSectionDirective)
	.name;