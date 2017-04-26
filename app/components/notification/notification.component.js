export const NotificationComponent = {
  templateUrl: 'notification/notification.component.html',
	controller: class NotificationController {
		constructor($rootScope, $timeout) {
		  'ngInject';
			this.$timeout = $timeout;
			
			this.active = false;
			this.shown = false;

			$rootScope.$on('notification:show', event => this.show());
		}
		
	  show() {
	    if (!this.active) {
	      this.active = true;
	      this.shown = true;
	      return this.$timeout(() => {
	        this.active = false;
	      }, 5000);
	    }
	  }

	  close() {
	    this.active = false;
	  }
	}
}
