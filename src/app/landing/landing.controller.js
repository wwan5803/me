export class LandingController {
  constructor ($scope, webDevTec, toastr) {
    'ngInject';
    $scope.$on('draggable:start', this.onDraggableEvent);
    $scope.$on('draggable:end', this.onDraggableEvent);
    this.droppedObjects1 = [{name: 'aaA'}];



  }

  onDraggableEvent(evt, data) {
    console.log("128", "onDraggableEvent", evt, data);
  }

  onDragComplete(data,evt){
    var index = this.droppedObjects1.indexOf(data);
    if (index == -1)
      this.droppedObjects1.push(data);
}
  onDropComplete(data,evt){

    var index = this.droppedObjects1.indexOf(data);
    if (index > -1) {
      this.droppedObjects1.splice(index, 1);
    }

  }
}
