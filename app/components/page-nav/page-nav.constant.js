const f = {
  bit: 'Business and Information Technology',
  eas: 'Engineering and Applied Science',
  esns: 'Energy Systems and Nuclear Science',
  hs: 'Health Sciences',
  sci: 'Science',
  ssh: 'Social Science and Humanities'
}

export const PageNavConstant = {
  items: [{
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
    items: [{
      title: f.sci,
      icon: 'icon icon_microscope',
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
    },{
      title: f.esns,
      icon: 'icon icon_atom',
      active: false
    },{
      title: f.eas,
      icon: 'icon icon_gears',
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
  active: false
}