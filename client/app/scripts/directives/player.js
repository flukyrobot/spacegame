'use strict';

angular.module('spaceApp')
  .directive('player', function () {
    return {
      template: '<hand id="hand"><card ng-repeat="card in cards"></card></hand>',
      restrict: 'E',
      controller: 'PlayerCtrl',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
