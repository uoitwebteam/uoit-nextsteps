export const PageSectionDirective = function() {
	'ngInject';
	return {
		restrict: 'EA',
		scope: false,
	  // controller() {},
	  templateUrl: function(el, attrs) {
			return attrs.templateUrl;
	  }
	}
}
