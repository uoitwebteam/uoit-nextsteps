import angular from 'angular';

import { DatastoreService } from './datastore.service';
import { SlugifyService } from './slugify.service';
import { MatchMediaService } from './matchmedia.service'

import templatecacheRun from './templatecache.run';

export const CommonModule = angular.module('app.common', [])
	.service('DatastoreService', DatastoreService)
	.service('SlugifyService', SlugifyService)
	.service('MatchMediaService', MatchMediaService)
	.run(templatecacheRun)
	.name;