'use strict';

angular.module('spaceApp',[])
  .controller('GameCtrl', function ($scope, HandModelService) {
  	$scope.name = "wanker"
  	$scope.hand = HandModelService;
  	window.hand = $scope.hand
  });
