import angular from 'angular';

import { PageSectionComponent } from './page-section.component';

export const PageSectionModule = angular.module('pageSection', [])
	.component('pageSection', PageSectionComponent)
	.name;