export const PageNavComponent = {
  bindings: {
  	open: '<',
  	active: '<'
  },
  templateUrl: 'page-nav/page-nav.component.html',
  controller: class PageNavController {
  	constructor(PageNav, SlugifyService) {
  		'ngInject';
  		this.items = SlugifyService.process(PageNav.items, 'title');
  	}
  }
}