'use strict';

describe('Service: hand', function () {

  // load the service's module
  beforeEach(module('spaceApp'));

  // instantiate service
  var hand;
  beforeEach(inject(function (_hand_) {
    hand = _hand_;
  }));

  it('should do something', function () {
    expect(!!hand).toBe(true);
  });

});
