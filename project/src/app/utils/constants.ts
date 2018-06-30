// constants file
// prefer naming constants in lower case only

export const navbarLeftMenuList = [{
  id: 1,
  name: 'Home',
  fontAwesomeIcon: 'faHome',
  pullRight: false
}, {
  id: 2,
  name: 'My Network',
  fontAwesomeIcon: 'faUsers',
  pullRight: false
}, {
  id: 3,
  name: 'Jobs',
  fontAwesomeIcon: 'faGlobeAfrica',
  pullRight: false
}, {
  id: 4,
  name: 'Messages',
  fontAwesomeIcon: 'faEnvelope',
  pullRight: false
}];

export const navbarRightMenuList = [{
  id: 5,
  name: 'Notifications',
  fontAwesomeIcon: 'faBell',
  pullRight: true
}, {
  id: 6,
  name: 'Settings',
  fontAwesomeIcon: 'faCogs',
  pullRight: true,
  routePath: '/home'
}, {
  id: 7,
  name: 'Log Out',
  fontAwesomeIcon: 'faAmbulance',
  pullRight: true,
  routePath: '/login'
}];

export const footerLinks = {
  leftSideAbove: {
    title: 'General',
    links: [
      {
        name: 'Sign Up'
      }, {
        name: 'Help Center'
      }, {
        name: 'About'
      }, {
        name: 'Press'
      }, {
        name: 'Blog'
      }, {
        name: 'Careers'
      }, {
        name: 'Developers'
      }
    ]
  },
  leftSideBelow: {
    title: 'Browse LinkedIn',
    links: [
      {
        name: 'Learning'
      }, {
        name: 'Jobs'
      }, {
        name: 'Salary'
      }, {
        name: 'Mobile'
      }, {
        name: 'ProFinder'
      }
    ]
  },
  rightSideAbove: {
    title: 'Business Solutions',
    links: [
      {
        name: 'Talent'
      }, {
        name: 'Marketing'
      }, {
        name: 'Sales'
      }, {
        name: 'Learning'
      }
    ]
  },
  rightSideBelow: {
    title: 'Directories',
    links: [
      {
        name: 'Members'
      }, {
        name: 'Jobs'
      }, {
        name: 'Pulse'
      }, {
        name: 'Companies'
      }, {
        name: 'Salaries'
      }, {
        name: 'Universities'
      }, {
        name: 'Top Jobs'
      }
    ]
  }
};
