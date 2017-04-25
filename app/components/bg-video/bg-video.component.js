export const BgVideoComponent = {
  bindings: {
  	mobile: '<',
  	visible: '<',
  	sources: '<',
  	fallback: '@'
  },
  template: `<video autoplay loop
  		class="bg-element animated fadeIn"
  		ng-if="$ctrl.visible && !$ctrl.mobile">
  		<source ng-repeat="source in $ctrl.sources" ng-src="{{ ::source.src }}" type="{{ ::source.type }}" />
		</video>
		<img ng-src="{{ ::$ctrl.fallback }}" alt="Timelapse background" class="bg-element" ng-if="$ctrl.mobile" />`
}