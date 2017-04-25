import angular from 'angular';

import { BgVideoComponent } from './bg-video.component';

export const BgVideoModule = angular.module('bgVideo', [])
	.component('bgVideo', BgVideoComponent)
	.name;