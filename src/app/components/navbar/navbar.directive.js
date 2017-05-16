export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (moment, $location, mainService) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    this.isNavCollapsed = true;
    this.width = window.innerWidth;
    this.location = $location;
    this.mainService = mainService;
  }
  gotoSection(eID){
    this.location.hash('bottom');

    // call $anchorScroll()
    this.mainService.scrollTo(eID);
  }
}
