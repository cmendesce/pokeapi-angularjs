'use strict';

/**
 * @ngdoc function
 * @name pokeApp.factory:PokeDataFactory
 * @description
 * # PokeDataFactory
 * Factory of the pokeApp
 */
angular.module('pokeApp')
	.factory('PokeDataFactory', function () {
		var data;
		return {
			getData: function () {
				return data;
			},
			setData: function (dataPokemon) {
				data = dataPokemon;
			}
		}
	});
