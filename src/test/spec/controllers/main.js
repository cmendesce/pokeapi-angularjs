'use strict';

describe('controller: MainCtrl', function () {

  var MainCtrl, scope, rootScope, pokeApiService, pokeDataFactory, deferred;

  beforeEach(angular.mock.module('pokeApp'));

  describe('init function', function () {

    beforeEach(inject(function ($rootScope, $controller, $location, $q, _PokeApiService_, _PokeDataFactory_) {
      rootScope = $rootScope;
      scope = $rootScope.$new();
      location = $location;
      pokeApiService = _PokeApiService_;
      pokeDataFactory = _PokeDataFactory_;
      deferred = $q.defer();
      spyOn(pokeApiService, 'getAllPokemons').and.returnValue(deferred.promise);

      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });

    }));

    it('should call init', function () {
      deferred.resolve([{national_id: 1}]);
      rootScope.$apply();
      expect(angular.equals(scope.pokemons, [{national_id: 1}])).toBeTruthy();
    });

  });

});