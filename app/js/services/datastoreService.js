function DatastoreService() {
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
    // SECTION 2 MONTH CHECKLIST
    // 
    // 
    section2months: [{ 
      show: false,
      month: 'May',
      points: [{ 
          text: 'Take a <a target="_blank" href="http://uoit.ca/main/future-students/undergraduate/campus-tours-and-events/index.php?utm_source=redirect&utm_medium=web&utm_campaign=tours">campus tour</a> or check out our <a target="_blank" href="http://uoit.ca/virtualtour/">virtual tour</a>.',
          highlight: {
            active: false,
            locations: [{
              code: 'virtualtour',
              name: 'UOIT Virtual Tour',
              desc: '<p><a target="_blank" href="http://uoit.ca/virtualtour/">Explore our campus from home with a virtual tour! <span class="ion-android-open"></span></a></p>',
              coords: [43.945127,-78.89683]
            }],
            transformClass: 'rotateX',
            icon: 'icon icon_map',
            marker: 'images/icons/marker_tour.svg',
            zoom: 18
          },
          complete: false,
          show: false
        },{ 
          text: '<a target="_blank" href="http://blog.uoit.ca/hunters-road-trip-to-welcome-our-incoming-class">See Hunter the Ridgeback’s welcome</a> for our incoming class.',
          complete: false,
          show: false
      }]
    }, {
      show: false,
      month: 'June',
      points: [{ 
          text: '<a target="_blank" href="http://uoit.ca/main/future-students/welcome/accepting-offer-101.php">Accept your offer of admission</a> by Wednesday, June 1.',
          complete: false,
          show: false,
          level: 101
        },{ 
          text: '<a target="_blank" href="http://uoit.ca/main/current-students/campus-services/housing-options/on-campus.php">Apply to residence</a> by Wednesday, June 1.',
          highlight: {
            active: false,
            locations: [{ 
              name: 'Simcoe Village Residence',
              code: 'ressim',
              desc: '<p>Our Simcoe Village (Central Hall, North Hall, South Hall) residence offers a number of different fully furnished suites.</p>',
              coords: [43.944225,-78.892008],
              show: false
            },{
              name: 'South Village Residence',
              code: 'ressv',
              desc: '<p>Our South Village residence offers suites with two private bedrooms, a three-piece bathroom and kitchenette.</p>',
              coords: [43.941908,-78.897004],
              show: false
            }],
            icon: 'icon icon_home',
            marker: 'images/icons/marker_home.svg',
            zoom: 16
          },
          complete: false,
          show: false
        },{ 
          text: 'Attend <a target="_blank" href="https://uoit.ca/forms/online/view.php?id=40504">Financing Your Education</a> information night on Tuesday, June 7 or Monday, June 13.',
          highlight: {
            active: false,
            locations: [{ 
              name: 'Science Building (UA)',
              code: 'ua',
              desc: '<p>Our Student Awards and Financial Aid (SAFA) office invites you to <a target="_blank" href="https://uoit.ca/forms/online/view.php?id=40504">Financing Your Education</a>, a presentation about government student assistance programs and other options of financial assistance to pay for post-secondary study.</p>',
              coords: [43.944584, -78.896433],
              show: false
            }],
            icon: 'icon icon_piggybank',
            marker: 'images/icons/marker_finance.svg',
            zoom: 18
          },
          complete: false,
          show: false
        },{ 
          text: '<a target="_blank" href="http://uoit.ca/main/future-students/welcome/paying-your-confirmation-deposit.php">Pay your $500 non-refundable tuition deposit</a> by Wednesday, June 15.',
          complete: false,
          show: false
        },{ 
          text: 'Register for courses. You will receive an email from the Registrar’s office with your registration window and instructions.',
          complete: false,
          show: false
      }]
    }, {
      show: false,
      month: 'August',
      points: [{ 
          text: 'Order your textbooks through the <a target="_blank" href="https://uoit.ca/faculty_staff/campus_services/facilities/campus_services/campus-bookstore.php">Campus Bookstore</a>.',
          highlight: {
            active: false,
            locations: [{
              name: 'North Oshawa campus location', 
              code: 'bs',
              desc: '<p>The following faculties are located at our North Oshawa campus location:</p><ul>'+
                '<li>Business and Information Technology</li>'+
                '<li>Energy Systems and Nuclear Science</li>'+
                '<li>Engineering and Applied Science</li>'+
                '<li>Health Sciences</li>'+
                '<li>Science</li></ul>',
              coords: [43.943905,-78.896586],
              show: false
            },{ 
              name: 'Downtown Oshawa campus location',
              code: 's61',
              desc: '<p>Our Faculty of Education and Faculty of Social Science and Humanities are located at our downtown Oshawa campus location.</p>',
              coords: [43.897653, -78.858074],
              show: false
            }],
            icon: 'icon icon_books',
            marker: 'images/icons/marker_books.svg',
            zoom: 12
          },
          complete: false,
          show: false
        },{ 
          text: 'Pick up your <a target="_blank" href="http://uoit.ca/main/current-students/campus-services/safety-security/services/campus-id/how-to-get-a-campus-id-card.php">student ID card</a>.',
          complete: false,
          show: false
        },{ 
          text: '<a target="_blank" href="http://uoit.ca/main/current-students/academics/finances/tuition-and-fees/payment-options/index.php">Pay your first instalment of fees</a> by Friday, August 12. You’ll find a complete breakdown of your fees in your <a target="_blank" href="http://uoit.ca/mycampus/">MyCampus account</a>.',
          highlight: {
            active: false,
            locations: [{
              name: 'U5 Building',
              code: 'u5', 
              desc: '<p>The Registrar’s office and Student Life office are located in U5.</p>', 
              coords: [43.946114,-78.896414],
              show: false
            },{
              name: '61 Charles Street',
              code: 'charles',  
              desc: '<p>The former Alger Press Building was renovated and refurbished in 2010. 61 Charles features lecture halls, study areas, student services and the Social Science Library.</p>', 
              coords: [43.897411,-78.857884],
              show: false
            }],
            icon: 'icon icon_piggybank',
            marker: 'images/icons/marker_finance.svg',
            zoom: 13
          },
          complete: false,
          show: false
      }, {
        text: 'Submit any outstanding documentation (including upgrading marks) by August 12. Please note: Summer upgrading marks (completed after June 30) are not accepted for competitive programs (Nursing and Medical Laboratory Science).',
        complete: false,
        show: false,
        level: 105
      }]
    }, {
      show: false,
      month: 'September',
      points: [{ 
          text: 'Classes begin Thursday, September 8.'
      }]
    }],
    // SECTION 3 MONTH CHECKLIST
    // 
    // 
    section3months: [{ 
      show: false,
      month: 'July',
      points: [{ 
          text: 'Sign up for your faculty-specific Smart Start program. Registration opens Friday, July 1.',
          complete: false,
          show: false
        }, {
        	text: '<a href="http://studentlife.uoit.ca/student-experience-centre/peermentoring/student-profile.php" title="Open Mentorship registration form" target="_blank">Sign up for UOIT Student Mentorship</a>! You’ll be matched with an upper-year peer mentor from your faculty and receive guidance as you enter your first year! Our mentors have a variety of unique experiences (e.g. first generation, mature, international and/or transfer students) and involvement on campus that they are ready to share with you!',
        	complete: false,
        	show: false
        }]
    }, {
      show: false,
      month: 'August',
      points: [{ 
          text: 'Attend your faculty-specific iBegin orientation (August 15 to 19).',
          complete: false,
          show: false
	      },{ 
          text: 'Attend your faculty-specific Smart Start program (August 18 to 31).',
          complete: false,
          show: false
        },{ 
          text: 'Student Accessibility Services hosts transition evening for parents (August 22) and Summer Transition Program (August 23 to 25).',
          complete: false,
          show: false
      }]
    }, {
      show: false,
      month: 'September',
      points: [{ 
          text: 'Faculty-specific Smart Start programs continue (September 1 and 2).',
          complete: false,
          show: false
        },{ 
          text: 'Attend September orientation and meet new friends on September 6 and 7.',
          complete: false,
          show: false
      }]
    }],
    // iBEGIN FACULTY LIST
    // 
    // 
    facultyList : [{ 
      date: 'Monday, August 15',
      name: f.sci,
      image: 'ibegin_fsci.jpg',
      color: '#007749',
      show: false
    },{
      date: 'Tuesday, August 16',
      name: f.esns,
      name2: f.eas,
      image: 'ibegin_feas.jpg',
      color: '#6F263D',
      color2: '#5F259F',
      show: false
    },{ 
      date: 'Wednesday, August 17',
      name: f.bit,
      image: 'ibegin_fbit.jpg',
      color: '#00558C',
      show: false
    },{ 
      date: 'Thursday, August 18',
      name: f.hs,
      image: 'ibegin_fhs.jpg',
      color: '#AF272F',
      show: false
    },{ 
      date: 'Friday, August 19',
      name: f.ssh,
      image: 'ibegin_fssh.jpg',
      color: '#BE4D00',
      show: false
    }
    // ,{ 
    //   date: 'Friday, August 12',
    //   name: 'Alternate <span class="ibegin">iBEGIN</span> date (not faculty-specific)',
    //   image: 'ibegin_panorama_blur.jpg',
    //   color: '#000000',
    //   show: false,
    //   nocover: true
    // }
    ],
    // SMART START MONTH CHECKLIST
    // 
    // 
    smartstartList: [{
      fac: [f.bit, '#00558C'],
      dates: [
        'Thursday, August 18 and Friday, August 19',
        'Thursday, August 25 and Friday, August 26'
      ],
      show: false
    },{
      fac: [f.esns, '#6F263D'],
      fac2: [f.eas, '#5F259F'],
      fac3: [f.sci, '#007749'],
      dates: [
        'Monday, August 22 and Tuesday, August 23',
        'Wednesday, August 24',
        'Monday, August 29 and Tuesday, August 30',
        'Wednesday, August 31 and Thursday, September 1',
        'Friday, September 2'
      ],
      show: false
    },{
      fac: [f.hs, '#AF272F'],
      dates: [
        'Wednesday, August 24 (bridging students)',
        'Monday, August 29 (first-year students)'
      ],
      show: false
    },{
      fac: [f.ssh, '#BE4D00'],
      dates: [
        'Monday, August 22'
      ],
      show: false
    }]
  }

  service.get = function(set) {
    return data[set];
  }

  return service;
}

export default {
  name: 'DatastoreService',
  fn: DatastoreService
};
