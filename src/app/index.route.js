export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}
