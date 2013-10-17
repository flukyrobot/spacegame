'use strict';

angular.module('spaceApp')
  .directive('board', function ($window) {
    return {
      template: '<div>'
      				+'<div id="opponent"></div>'
      				+'<div id="board"></div>'
      				+'<player id="player"></player>'
      			+'</div>',
      restrict: 'E',
      controller:'GameCtrl',
      replace:true,
      link: function postLink(scope, element, attrs) {

        var op = angular.element('#opponent').outerHeight(), 
        	player = angular.element("#player").outerHeight(),
        	board = angular.element("#board"),
        	win = angular.element(window);

        function setBoardHeight(){
        	var winh = win.outerHeight();
        	console.log(op,player,win.outerHeight())
        	board.css({height: winh - op - player + 'px'})
        }
        
        win.on('resize', _.debounce(setBoardHeight, 200, false));
        setBoardHeight();
      }
    };
  });
