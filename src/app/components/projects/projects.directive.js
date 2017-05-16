export function ProjectsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/projects/projects.html',
    scope: {
        creationDate: '='
    },
    controller: ProjectsCtrl,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ProjectsCtrl {
  constructor (moment) {
    'ngInject';
    this.width = window.innerWidth;
  }
}
