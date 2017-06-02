export class LandingController {
  constructor($scope, webDevTec, toastr, $state) {
    'ngInject';
    this.onDraggableEvent = this.onDraggableEvent.bind(this);
    $scope.$on('draggable:start', this.onDraggableEvent);
    $scope.$on('draggable:end', this.onDraggableEvent);
    this.droppedObjects1 = [{name: 'aaA'}];
    this.state = $state;
    this.onDrag = false;

  }

  onDraggableEvent(evt, data) {
    this.onDrag = true;
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
}
