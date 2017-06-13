export class LandingController {
  constructor($scope, webDevTec, toastr, $state, $window) {
    'ngInject';
    var myWindow = angular.element($window);
    this.onDraggableEvent = this.onDraggableEvent.bind(this);
    $scope.$on('draggable:start', this.onDraggableEvent);
    $scope.$on('draggable:end', this.onDraggableEvent);
    this.droppedObjects1 = [{name: 'aaA'}];
    this.state = $state;
    // $window.keydown(function(e) {console.log(123) });
    // $window.keyup(function(e) { d[e.which] = false; });
    this.onDrag = false;

    var pane = document.getElementById("pane"),
      box = document.getElementById("box"),

      x = 3;
    this.box = box;
    this.d = {};
    this.w = pane.style.width - box.style.width;

    var that = this;
    myWindow.on("keydown", function(evt) {
      console.log(1, evt.which)
      that.d[evt.which] = true;
    });

    myWindow.on("keyup", function(evt) {
      that.d[evt.which] = false;
    });

    setInterval(function(){
      document.getElementById("box").style.left = function(i,v) { return this.newv(v, 37, 39); };
      console.log(document.getElementById("box").style.left)
      window.document.getElementById("box").style.top = function(i,v) { return this.newv(v, 38, 40); };

    }, 20)

  }



  newv(v,a,b) {
    console.log(2);
    var n = parseInt(v, 10) - (this.d[a] ? 3 : 0) + (this.d[b] ? 3 : 0);
    return n < 0 ? 0 : n > this.w ? this.w : n;
  }

  onDraggableEvent(evt, data) {
    if(evt.name == 'draggable:start'){
      this.onDrag = true;
    }else if(evt.name == 'draggable:end'){
      this.onDrag = false;
    }

    console.log("128", "onDraggableEvent", evt, data);
  }

  onDragComplete(data, evt) {
    var index = this.droppedObjects1.indexOf(data);
    if (index == -1)
      this.droppedObjects1.push(data);
  }

  onDropComplete(data, evt) {
    var index = this.droppedObjects1.indexOf(data);
    if (index > -1) {
      this.droppedObjects1.splice(index, 1);
      this.state.go('home');
    }

  }


  uniKeyCode(event) {
    var key = event.which || event.keyCode;
    console.log(key)
  }
}
