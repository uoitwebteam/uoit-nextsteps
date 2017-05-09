export class SlugifyService {
	process(items, slugProperty) {
    return items.map(item => {
      item.anchor = this.slug(item[slugProperty]);
      const children = (item.items || item.faculties);
      if (children && children.length) this.process(children, slugProperty);
      return item;
    });
  }
	slug(s) {
	  if (!s) return '';
	  s = s.replace(/[^\w\s-]/g, '').trim().toLowerCase();
	  return s.replace(/[-\s]+/g, '-');
	}
}