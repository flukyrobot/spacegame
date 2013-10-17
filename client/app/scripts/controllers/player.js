'use strict';

angular.module('spaceApp')
  .controller('PlayerCtrl', function ($scope,HandModelService) {
  	console.log('cards',$scope.hand.cards)
  	$scope.cards = HandModelService.cards
  	console.log(1111, $scope.hand)
  	$scope.$watch($scope.hand.cards, function(){console.log('changes')})
  });	
