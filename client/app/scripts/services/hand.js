'use strict';

angular.module('spaceApp')
  .service('HandModelService', function Hand($rootScope) {
  	var HandService = {}
  	, hand = []
    , cardWidth = 0
    , cardMargin = function(){
        var c = angular.element('<card/>'); 
          var ml = parseInt(c.css('marginLeft').match(/^(\d+)/)[0],10),
          mr = parseInt(c.css('marginRight').match(/^(\d+)/)[0],10);

          return ml + mr;
        }();

    function updateWidth(){
      console.log('updating width')
      HandService.cardWidth = ((1 / hand.length) * angular.element(window).outerWidth()) - cardMargin;
    }
  	
    HandService.cards = hand;
    HandService.cardWidth = cardWidth;
  	HandService.get = function(id){
  		var card = false;
  		angular.forEach(hand, function(_card){
  			if(_card.id == id)
          card = _card;
  		});
  		return card;
  	};

  	HandService.put = function(card){
  		var _card = HandService.get(card.id);
      
  		if(_card){
  			_card = _.extend(_card, card);
  		}else{
  			hand.push(card);
  		}
      updateWidth();
      $rootScope.$$phase || $rootScope.$digest()
  	}

  	HandService.remove = function(id){
  		var index = false;
  		angular.forEach(hand, function(card, idx){
        console.log('idx',idx)
  			if(card.id == id){
  				index = idx;
  			}
  		});
  		hand = hand.splice(index, 1);
      updateWidth();
      $rootScope.$$phase || $rootScope.$digest();
  		return index;
  	}

  	HandService.size = function(){
  		return hand.length;
  	}

    HandService.put({name:'default', id:0})

  	return HandService;
  });
