export class LandingController {
  constructor($scope, webDevTec, toastr, $state, $window, $document) {
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

    var pane = $document.find('#pane'),
      box = $document.find('#box'),
      d = {},
      x = 3;
    this.box = box;
    this.w = pane.width() - box.width(),
    console.log(w)

    myWindow.on("keydown", function(evt) {
      d[evt.which] = true;

      console.log($document.find('#box').width())
    });

    myWindow.on("keyup", function(evt) {
      d[evt.which] = false;
    });

    setInterval(function() {
      this.box.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
      });
    }, 20)

  }



  newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
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
