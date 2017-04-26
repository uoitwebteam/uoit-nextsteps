import angular from 'angular';

import { ParallaxDirective } from './parallax.directive';
import { ParallaxBgDirective } from './parallax-bg.directive';

export const ParallaxModule = angular.module('parallax', [])
	.directive('parallax', ParallaxDirective)
	.directive('parallaxBackground', ParallaxBgDirective)
	.name;