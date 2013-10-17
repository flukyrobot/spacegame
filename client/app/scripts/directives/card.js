'use strict';

angular.module('spaceApp')
  .directive('card', function($rootScope) {
    return {
      template: '<div>{{card.name}}</div>',
      replace: false,
      restrict: 'E',
     
      link: function postLink(scope, element, attrs) {
      	var width = $rootScope.hand.cardWidth, height = width * 1.5;
      	angular.element('.card').css({width: width + "px", height: height + "px"})
      }
    };
  });
