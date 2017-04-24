export const ChecklistItemDirective = function() {
	return {
		restrict: 'EA',
	  scope: {
	  	item: '=',
	  	onToggle: '&'
	  },
	  bindToController: true,
	  controllerAs: '$ctrl',
	  controller() {},
	  template: `<label>
				<input type="checkbox" ng-model="$ctrl.item.complete" ng-change="$ctrl.onToggle()"></input>
				<span class="indicator"></span>
				<span ng-bind-html="::$ctrl.item.text"></span>
			</label>`
	}
}
