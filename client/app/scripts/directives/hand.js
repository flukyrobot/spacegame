'use strict';

angular.module('spaceApp')
  .directive('hand', function () {
    return {
      template: '<card class="card" ng-repeat="card in cards"></card>',
      restrict: 'E',
      replace: false,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
