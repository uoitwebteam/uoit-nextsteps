export const NotificationComponent = {
  template: `<div class="alert-wrapper"> 
			<div class="alert-msg animated" ng-class="{ 'fadeInUp': $ctrl.active, 'fadeOutDown': !$ctrl.active && $ctrl.shown }">
				<span class="ion-checkmark-circled"></span>
				<div class="msg">
					Your progress has been saved!<br/>
					<small>Keep checking back and checking things off so you never forget your <strong>next steps!</strong></small>
					<a class="close-btn ion-close" ng-click="$ctrl.close()"></a>
				</div>
			</div>
		</div>`,
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
