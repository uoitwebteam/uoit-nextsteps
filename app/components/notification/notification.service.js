export class NotificationService {
	constructor($rootScope) {
	  'ngInject';
	  this.$rootScope = $rootScope;
	}
	show() {
		this.$rootScope.$emit('notification:show');
	}
}