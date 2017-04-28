export class MatchMediaService {
	constructor($window, $rootScope) {
		'ngInject';
		this.$window = $window;
		this.$rootScope = $rootScope;
		this.queries = [];
		this.$window.addEventListener('resize', this.check.bind(this))
	}
	when(query, result) {
		this.add({ query, result });
		this.check();
		return this;
	}
	add({ query, result }) {
		this.queries.push({ query, result });
	}
	check() {
		this.queries.forEach(({ query, result }) => {
			this.$rootScope.$evalAsync(() => {
	      this.$window.matchMedia(query).matches && result();
	    });
		})
	}
}