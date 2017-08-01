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
  constructor(moment, $location, mainService, $timeout, $rootScope, $scope, $interval) {
    'ngInject';

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    this.isNavCollapsed = true;
    this.width = window.innerWidth;
    this.location = $location;
    this.mainService = mainService;
    $scope.itemArray = [
      {image: 'assets/images/cloud2.png', isRain: true, isSunny: false, isSnow: false},
      {image: 'assets/images/cloud3.png', isRain: false, isSunny: false, isSnow: true},
      {image: 'assets/images/sun.png', isRain: false, isSunny: true, isSnow: false}
    ];
    $scope.selectItem = $scope.itemArray[0];

    $interval(function () {
      var index;
      index = Math.floor(Math.random() * 4);
      $scope.selectItem = $scope.itemArray[index];
      if($scope.selectItem.isRain){
        $rootScope.rain = true;
        $rootScope.snow = false;
        $rootScope.sunny = false;
      }else if($scope.selectItem.isSnow){
        $rootScope.snow = true;
        $rootScope.rain = false;
        $rootScope.sunny = false;
      }else{
        $rootScope.sunny = true;
        $rootScope.rain = false;
        $rootScope.snow = false;
      }
      console.log($scope.rain)
      // for(var i = 0; i<$scope.itemArray.length; i++){
      //   $scope.itemArray[i].select = false;
      // }
      // $scope.itemArray[index].select = true;
    }, 5000);

    // $scope.$watch('itemArray', function(){
    //   var index = 0;
    //   index = Math.floor(Math.random() * 3);
    //   $timeout( function(){
    //     $scope.selectItem = $scope.itemArray[index];
    //     for(var i = 0; i<$scope.itemArray.length; i++){
    //       $scope.itemArray[i].select = false;
    //     }
    //     $scope.itemArray[index].select = true;
    //   }, 5000 );
    // }, true);

  }

  gotoSection(eID) {
    this.location.hash('bottom');
    // call $anchorScroll()
    this.mainService.scrollTo(eID);
  }
}
