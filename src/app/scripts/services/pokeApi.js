'use strict';

/**
 * @ngdoc function
 * @name pokeApp.service:PokeApiService
 * @description
 * # PokeApiService
 * Controller of the pokeApp
 */
angular.module('pokeApp')
  .service('PokeApiService', function ($q, $http) {

    var URL = "http://pokeapi.co/api/v1/egg/2";
    var BASEURL = 'http://pokeapi.co/';

    return {

      getAllPokemons: function () {

        var promises = [];
        var defered = $q.defer();

        $http.get(URL).then(function (response) {
          angular.forEach(response.data.pokemon, function (value, key) {
            var pokechurl = BASEURL + value.resource_uri;
            promises.push(Promise.resolve($http.get(pokechurl)));
          });
          defered.resolve(Promise.all(promises));

        }, function () {
          defered.reject([]);
        });
        return defered.promise;
      },

      getDescription: function (national_id) {
        var url = BASEURL + 'api/v1/description/' + national_id;
        var defered = $q.defer();
        $http.get(url).then(function (response) {
          defered.resolve(response);
        }, function () {
          defered.reject();
        });
        return defered.promise;
      }
    }

  });
