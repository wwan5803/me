export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'app/landing/landing.html',
      controller: 'LandingController',
      controllerAs: 'vm'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}
