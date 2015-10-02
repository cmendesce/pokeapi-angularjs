'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('pokeApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should version on the scope', function () {
    expect(scope.version).toBe('0.1');
  });
});
