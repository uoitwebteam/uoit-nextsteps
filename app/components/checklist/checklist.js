import angular from 'angular';
import ngStorage from 'angular-storage';

import { NotificationModule } from '../notification/notification';

import { ChecklistComponent } from './checklist.component';
import { ChecklistItemDirective } from './checklist-item.directive';

export const ChecklistModule = angular.module('checklist', [ ngStorage, NotificationModule ])
	.component('checklist', ChecklistComponent)
	.directive('checklistItem', ChecklistItemDirective)
	.name;