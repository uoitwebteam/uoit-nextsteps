export class DatastoreService {
	constructor() {
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
	      month: 'May',
	      points: [{ 
	          text: 'Take a <a target="_blank" href="http://uoit.ca/main/future-students/undergraduate/campus-tours-and-events/index.php?utm_source=nextsteps&utm_medium=web&utm_campaign=tours">campus tour</a> or check out our <a target="_blank" href="http://uoit.ca/virtualtour?utm_source=nextsteps&utm_medium=web&utm_campaign=virtualtour">virtual tour</a>.'
	        },{ 
	          text: '<a target="_blank" href="https://www.youtube.com/watch?v=LnehX28dP2A">See Hunter the Ridgeback’s welcome</a> for our incoming class.',
	          level: 101
	      }]
	    }, {
	      month: 'June',
	      points: [{ 
	          text: '<a target="_blank" href="http://uoit.ca/main/future-students/welcome/accepting-offer-101.php?utm_source=nextsteps&utm_medium=web&utm_campaign=accept">Accept your offer of admission</a> by Thursday, June 1.',
	          level: 101
	        },{ 
	          text: '<a target="_blank" href="http://uoit.ca/main/current-students/campus-services/housing-options/on-campus.php?utm_source=nextsteps&utm_medium=web&utm_campaign=residence">Apply to residence</a> by Thursday, June 1.'
	        },{ 
	          text: 'Submit your final post-secondary transcripts and course syllabi by Thursday, June 1 to ensure your transfer credit evaluation is complete before the beginning of the fall semester. For details on what is required, visit your <a target="_blank" href="https://uoit.ca/mycampus/">applicant portal</a>.',
	          level: 105
	        },{ 
	          text: 'Attend <a target="_blank" href="https://uoit.ca/forms/online/view.php?id=40504">Financing Your Education</a> information night on Wednesday, June 14 or Tuesday, June 20.'
	        },{ 
	          text: '<a target="_blank" href="https://uoit.ca/future-students/welcome/accept-your-offer/pay-your-deposit-ouac.php?utm_source=nextsteps&utm_medium=web&utm_campaign=deposit">Pay your $500 non-refundable tuition deposit</a> by Thursday, June 15.'
	        },{ 
	          text: '<a target="_blank" href="http://uoit.ca/future-students/welcome/101-applicant/course-registration/index.php?utm_source=nextsteps&utm_medium=web&utm_campaign=register">Register for courses</a>. You will receive an email from the Registrar’s office with your registration window and instructions.'
					},{ 
	          text: 'If you are upgrading over the summer, submit an upgrading form by Friday, June 30.',
	          level: 101
	      }]
	    }, {
	      month: 'July',
	      points: [{ 
	        text: 'Register for your <a target="_blank" href="https://uoit.ca/mycampus/">laptop pick-up</a> if you are in one of the following:<ul class="block-list"><li>All programs in the Faculty of Energy Systems and Nuclear Science</li><li>All programs in the Faculty of Engineering and Applied Science</li><li>Game Development and Entrepreneurship program</li></ul>'
	      },{ 
	        text: '<a target="_blank" href="http://studentlife.uoit.ca/student-experience-centre/orientation/ibegin.php?utm_source=nextsteps&utm_medium=web&utm_campaign=ibegin">Attend iBegin</a> on your faculty-specific date'
	      }]
	    }, {
	      month: 'August',
	      points: [{ 
	        text: 'Order your textbooks through the <a target="_blank" href="https://uoit.bookware3000.ca/">Campus Bookstore</a>.'
	      },{ 
	        text: 'Pick up your <a target="_blank" href="https://uoit.ca/current-students/campus-services/safety-security/services/campus-id/how-to-get-a-campus-id-card.php?utm_source=nextsteps&utm_medium=web&utm_campaign=campusid">student ID card</a>.'
	      },{
	      	text: 'Submit any outstanding documentation (including upgrading marks) by Friday, August 11.<br/><small><strong>Please note:</strong> Summer upgrading marks (completed after June 30) will not be accepted for competitive programs such as Nursing and Medical Laboratory Science.</small>',
	      	level: 105
	      },{
	      	text: 'Submit final marks for upgrading courses by Friday, August 11.',
	      	level: 101
	      },{ 
	        text: '<a target="_blank" href="https://uoit.ca/current-students/academics/finances/tuition-and-fees/payment-options/index.php?utm_source=nextsteps&utm_medium=web&utm_campaign=fees">Pay your first instalment of fees</a> by Friday, August 11. You’ll find a complete breakdown of your fees in your <a target="_blank" href="http://uoit.ca/mycampus/">MyCampus account</a>.'
	      },{ 
	        text: '<a target="_blank" href="http://studentlife.uoit.ca/student-learning/smart-start.php?utm_source=nextsteps&utm_medium=web&utm_campaign=smartstart">Attend Smart Start</a> to build a strong academic foundation for university.'
	      }]
	    }, {
	      month: 'September',
	      points: [{
	      	text: '<a target="_blank" href="http://studentlife.uoit.ca/student-experience-centre/orientation/options.php?utm_source=nextsteps&utm_medium=web&utm_campaign=orientation">Attend September Orientation</a> on Tuesday, September 5 and Wednesday, September 6.'
	      },{ 
	        text: 'Classes begin Thursday, September 7.'
	      }]
	    }],
	    // SECTION 3 MONTH CHECKLIST
	    // 
	    // 
	    section3months: [{ 
	      month: 'June',
	      points: [{ 
          text: 'Sign up for your faculty-specific Smart Start program. Registration opens Friday, June 30.'
        }]
	    }, { 
	      month: 'July',
	      points: [{ 
          text: 'Attend your faculty-specific iBegin orientation (July 26 to August 4).'
	      }]
	    }, {
	      month: 'August',
	      points: [{ 
          text: 'Attend your faculty-specific Smart Start program (August 21 to September 1).'
        },{ 
          text: 'Student Accessibility Services hosts transition evening for parents (August 21) and Summer Transition Program (August 28 to September 1).'
	      }]
	    }, {
	      month: 'September',
	      points: [{ 
          text: 'Faculty-specific Smart Start programs continue (August 31 to September 1).'
        },{ 
          text: 'Attend September Orientation and meet new friends on Tuesday, September 5 and Wednesday, September 6.'
	      }]
	    }],
	    // iBEGIN FACULTY LIST
	    // 
	    // 
	    facultyList : [{ 
	      date: 'WEDNESDAY, JULY 26 to THURSDAY, AUGUST 3',
	      name: f.sci,
	      image: 'ibegin_fsci.jpg',
	      color: '#007749'
	    },{ 
	      date: 'THURSDAY, JULY 27 to FRIDAY, AUGUST 4',
	      name: f.bit,
	      image: 'ibegin_fbit.jpg',
	      color: '#00558C'
	    },{ 
	      date: 'FRIDAY, JULY 28',
	      name: f.hs,
	      image: 'ibegin_fhs.jpg',
	      color: '#AF272F'
	    },{ 
	      date: 'MONDAY, JULY 31 to TUESDAY, AUGUST 1',
	      name: f.ssh,
	      image: 'ibegin_fssh.jpg',
	      color: '#BE4D00'
	    },{
	      date: 'WEDNESDAY, AUGUST 2',
	      name: f.esns,
	      name2: f.eas,
	      image: 'ibegin_feas.jpg',
	      color: '#6F263D',
	      color2: '#5F259F'
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
	        'Monday, August 21', 
	        'Monday, August 29'
	      ]
	    },{
	      fac: [f.esns, '#6F263D'],
	      fac2: [f.eas, '#5F259F'],
	      fac3: [f.sci, '#007749'],
	      dates: [
	        'Wednesday, August 9 and Thursday, August 10',
	        'Monday, August 14 and Tuesday, August 15',
	        'Wednesday, August 16 and Thursday, August 17',
	        'Monday, August 21 and Tuesday, August 22',
	        'Wednesday, August 23 and Thursday, August 24',
	        'Tuesday, August 29 and Wednesday, August 30',
	        'Thursday, August 31 and Friday, September 1'
	      ]
	    },{
	      fac: [f.hs, '#AF272F'],
	      dates: [
	        'Tuesday, August 22',
	        'Monday, August 28'
	      ]
	    },{
	      fac: [f.ssh, '#BE4D00'],
	      dates: [
	        'Wednesday, August 23',
	        'Wednesday, August 30'
	      ]
	    }]
	  }

	  service.get = function(set) {
	    return data[set];
	  }

	  return service;
	}
}
