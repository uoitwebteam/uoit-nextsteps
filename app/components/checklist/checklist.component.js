export const ChecklistComponent = {
  bindings: {
  	level: '@',
  	listName: '@',
  	listItems: '<'
  },
  templateUrl: 'checklist/checklist.component.html',
	controller: class ChecklistController {
		constructor(NotificationService, store) {
			'ngInject';
			this.NotificationService = NotificationService;
			this.StorageService = store;
		}
		toggle() {
      this.NotificationService.show();
      this.StorageService.set(this.listName, this.listItems);
		}
	}
}
