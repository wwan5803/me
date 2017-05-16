export function ContactDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/contact/contact.html',
    scope: {
        creationDate: '='
    },
    controller: ContactCtrl,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ContactCtrl {
  constructor (moment) {
    'ngInject';
    this.width = window.innerWidth;
  }
}
