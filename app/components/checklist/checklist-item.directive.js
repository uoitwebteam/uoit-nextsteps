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
	  templateUrl: 'checklist/checklist-item.directive.html'
	}
}
