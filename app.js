(function () {
'use strict'

angular.module('LunchCheck', [])

.controller('LunchCheckController', AssignmentController );

AssignmentController.$inject= ['$scope'];

function AssignmentController($scope) {

  $scope.name = "";
  $scope.message = "";

  $scope.List_Items = "";

  $scope.message_fct = function () {

    var List = $scope.List_Items.split(',');

    console.log(List[0]);


    if($scope.List_Items== "")
    $scope.message =  "Please enter data first";
    else {
      if(List.length <= 3)
      $scope.message =  "Enjoy!";
      if(List.length > 3)
      $scope.message =  "Too much!";

    }
  };



}



})();
