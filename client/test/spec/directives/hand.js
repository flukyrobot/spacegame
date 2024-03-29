'use strict';

describe('Directive: hand', function () {

  // load the directive's module
  beforeEach(module('spaceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hand></hand>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hand directive');
  }));
});
