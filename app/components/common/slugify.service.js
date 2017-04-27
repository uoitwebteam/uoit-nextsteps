export class SlugifyService {
	process(items, slugProperty) {
    return items.map(item => {
      item.anchor = this.slug(item[slugProperty]);
      var toslug2 = slugProperty + '2';
      if (item[toslug2]) item.anchor2 = this.slug(item[toslug2]);
      if (item.items) this.process(item.items, slugProperty);
      return item;
    });
  }
	slug(s) {
	  if (!s) return '';
	  s = s.replace(/[^\w\s-]/g, '').trim().toLowerCase();
	  return s.replace(/[-\s]+/g, '-');
	}
}