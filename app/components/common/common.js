import angular from 'angular';

import { DatastoreService } from './datastore.service';
import { ConfigstoreService } from './configstore.service';

import templatecacheRun from './templatecache.run';

export const CommonModule = angular.module('app.common', [])
	.service('DatastoreService', DatastoreService)
	.service('ConfigstoreService', ConfigstoreService)
	.run(templatecacheRun)
	.name;