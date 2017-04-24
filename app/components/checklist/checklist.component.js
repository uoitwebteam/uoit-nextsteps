export const ChecklistComponent = {
  bindings: {
  	listName: '@',
  	listItems: '<'
  },
  template: `<div class="list-container">
			<div ng-repeat="item in ::$ctrl.listItems">
				<h2 class="animated"
					in-view="item.show = $inview"
					in-view-options="{ offsetTop: 50, offsetBottom: -50 }"
					ng-class="{'fadeOutLeft' : !item.show, 'fadeInLeft' : item.show}">
					{{ ::item.month }}
				</h2>
				<ul>
			  	<li ng-repeat="point in ::item.points" class="animated"
			  		ng-if="!point.level||point.level==level"
						in-view="point.show = $inview"
						in-view-options="{ offsetTop: 50, offsetBottom: -50 }"
						ng-class="{'fadeOutLeft' : !point.show, 'fadeInLeft' : point.show }">
						<checklist-item item="point" on-toggle="$ctrl.toggle()"></checklist-item>
			  	</li>
				</ul>
			</div>
		</div>`,
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
