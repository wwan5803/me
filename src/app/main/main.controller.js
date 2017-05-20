export class MainController {
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1492215601713;
    this.toastr = toastr;
    this.windowHeight = window.innerHeight;
    this.events = [{
      badgeClass: 'success',
      badgeIconClass: 'glyphicon-check',
      time: '1991',
      title: 'Birth',
      content: 'Start my trip'
    },
      {
      time: '2013',
      title: 'Graduate from SCU',
      content: 'Bachelor of information technology'
    },{
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      time: '2014',
      title: 'Graduate from USYD',
      content: 'Master of software engineering'
    }];

    this.workEvents = [{
      badgeClass: 'info',
      time: '12.10-13.1',
      title: 'China grid',
      content: 'IT help desk intern'
    },{
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-check',
      time: '14.12-15.2',
      title: 'Posmil Software',
      content: 'Sales consultant'
    },
      {
        badgeClass: 'info',
        time: '15.1-15.6',
        title: 'Sincere Real Estate',
        content: 'Sales consultant'
      },{
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        time: '15.6-now',
        title: 'Sk8Tech',
        content: 'Full-Stack developer'
      }];


    this.activate($timeout, webDevTec);


  }



  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
