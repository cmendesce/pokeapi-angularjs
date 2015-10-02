'use strict';

/**
 * @ngdoc function
 * @name pokeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokeApp
 */
angular.module('pokeApp')
  .controller('MainCtrl', function ($location, $scope, PokeApiService, PokeDataFactory) {

    $scope.pokemons = [];
    $scope.loading = true;

    $scope.init = function () {
      PokeApiService.getAllPokemons()
        .then(function (data) {
          $scope.pokemons = data;
          $scope.loading = false;
        }, function (error) {
          console.log(error);
        });
    }

    $scope.details = function (pokemon) {
      PokeDataFactory.setData(pokemon);
      $scope.safeApply(function () {
        $location.path("/details");
      });
    }

    $scope.safeApply = function (fn) {
      var phase = this.$root.$$phase;
      if (phase == '$apply' || phase == '$digest') {
        if (fn && (typeof (fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    $scope.init();

  });
