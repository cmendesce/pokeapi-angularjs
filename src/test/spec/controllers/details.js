'use strict';

describe('Controller: DetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('pokeApp'));

  beforeEach(module(function ($provide) {
    $provide.factory('PokeDataFactory', function () {
      var getData = jasmine.createSpy('getData').and.callFake(function () {
        return { national_id: 1 };
      });
      return {
        getData: getData
      };
    });

    $provide.service('PokeApiService', function ($q) {
      var getDescription = jasmine.createSpy('getDescription').and.callFake(function () {
        //if (passPromise) {
        return $q.when('Description');
        //}
        //else {
        //  return $q.reject('something went wrong');
        //}
      });
      return {
        getDescription: getDescription
      };
    });

  }));

  var DetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailsCtrl = $controller('DetailsCtrl', {
      $scope: scope
    });
  }));

  it('should version on the scope', function () {
    scope.init();
    expect(angular.equals(scope.data, { national_id: 1 })).toBeTruthy();
  });
});
