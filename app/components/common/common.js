import angular from 'angular';

import { DatastoreService } from './datastore.service';
import { ConfigstoreService } from './configstore.service';

export const CommonModule = angular.module('app.common', [])
	.service('DatastoreService', DatastoreService)
	.service('ConfigstoreService', ConfigstoreService)
	.name;