'use strict';

/**
 * @ngdoc function
 * @name pokeApp.service:FirebaseService
 * @description
 * # FirebaseService
 * Controller of the pokeApp
 */
angular.module('pokeApp')
	.service('FirebaseService', function ($q, $firebaseArray) {
		return {
			getComments: function (national_id) {
				var url = 'https://pokeapi.firebaseio.com/' + national_id;
				var fireRef = new Firebase(url);
				var defered = $q.defer();
				var data = $firebaseArray(fireRef)
				defered.resolve(data);
				return defered.promise;
			}
		}
	});
