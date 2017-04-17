function ConfigstoreService() {
  'ngInject';

  const service = {};
  const f = {
    bit: 'Business and Information Technology',
    eas: 'Engineering and Applied Science',
    esns: 'Energy Systems and Nuclear Science',
    hs: 'Health Sciences',
    sci: 'Science',
    ssh: 'Social Science and Humanities'
  }
  const data = {
    // NAVIGATION MENU
    // 
    // 
    navMenu: {
      nodes: [{
        title: 'Welcome',
        icon: 'icon icon_mapmarker',
        active: false
      },{
        title: 'Student Life',
        icon: 'icon icon_clipboard',
        active: false
      },{
        title: 'iBegin',
        icon: 'icon icon_megaphone',
        nodes: [{
          title: f.sci,
          icon: 'icon icon_microscope',
          active: false
        },{
          title: f.esns,
          icon: 'icon icon_atom',
          active: false
        },{
          title: f.eas,
          icon: 'icon icon_gears',
          active: false
        },{
          title: f.bit,
          icon: 'icon icon_bargraph',
          active: false
        },{
          title: f.hs,
          icon: 'icon icon_heart',
          active: false
        },{
          title: f.ssh,
          icon: 'icon icon_gavel',
          active: false
        }],
        active: false
      },{
        title: 'Smart Start',
        icon: 'icon icon_graduate',
        active: false
      },{
        title: 'Accessibility',
        icon: 'ion-ios-body',
        active: false
      },{
        title: 'Orientation',
        icon: 'icon icon_compass2',
        active: false
      },{
        title: 'Contact',
        icon: 'icon icon_chattyping',
        active: false
      }],
      active: false,
      open: false,
      toggle: function() {
        this.open = !this.open;
      },
      slugify: function(s) {
        if (!s) return '';
        s = s.replace(/[^\w\s-]/g, '').trim().toLowerCase();
        return s.replace(/[-\s]+/g, '-');
      }
    },
    // GOOGLE MAP CONFIGURATION
    // 
    // 
    mapOptions: {
      disableDefaultUI: true,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      draggable: false,
      //mapTypeId: maps.MapTypeId.SATELLITE,
      styles: [
        {
          'featureType': 'water',
          'stylers': [
            { 'visibility': 'off' }
          ]
        },{
          'featureType': 'landscape.natural',
          'stylers': [
            { 'visibility': 'off' }
          ]
        },{
          'featureType': 'landscape.natural.landcover',
          'stylers': [
            { 'visibility': 'on' }
          ]
        },{ //hide all fills
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#0077CA' }
          ]
        },{ //hide all fills
          featureType: 'poi',
          elementType: 'geometry.fill',
          stylers: [
            { color: '#003c71' }
          ]
        },{
          'elementType': 'labels.icon',
          'stylers': [
            { 'visibility': 'off' }
          ]
        },{
          'elementType': 'labels.text.fill',
          'stylers': [
            // { 'visibility': 'simplified' },
            { 'color': '#ffffff' }
          ]
        },{
          'elementType': 'labels.text.stroke',
          'stylers': [
            { 'color': '#0077ca' }
          ]
        }
      ]
    }
  }

  service.get = function(set) {
    return data[set];
  }

  return service;
}

export default {
  name: 'ConfigstoreService',
  fn: ConfigstoreService
};
