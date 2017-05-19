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
    }, {
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      time: '2011',
      title: 'Study in SCU',
      content: 'Bachelor of information technology'
    }, {
      time: '2013',
      title: 'Graduate',
      content: 'Bachelor of information technology'
    },{
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      time: '2014',
      title: 'Study in USYD',
      content: 'Master of software engineering'
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
