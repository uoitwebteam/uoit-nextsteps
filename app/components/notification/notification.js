import angular from 'angular';

import { NotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';

export const NotificationModule = angular.module('notification', [])
	.service('NotificationService', NotificationService)
	.component('notification', NotificationComponent)
	.name;