'use strict';

/**
 * @ngdoc function
 * @name pokeApp.controller:DetailsCtrl
 * @description
 * # MainCtrl
 * Controller of the pokeApp
 */
angular.module('pokeApp')
	.controller('DetailsCtrl', function ($scope, $http, PokeDataFactory, PokeApiService, FirebaseService) {

		$scope.data;
		$scope.description;
		$scope.name = "";
		$scope.email = "";
		$scope.comment = "";

		$scope.init = function() {
			var data = PokeDataFactory.getData();
			$scope.data = data;
			PokeApiService.getDescription(data.national_id).then(function (response) {
				$scope.description = response.data.description;
			});

			FirebaseService.getComments(data.national_id).then(function (response) {
				$scope.comments = response;
			});
		}

		$scope.sendComment = function () {
			$scope.comments.$add({
                name: $scope.name,
                email: $scope.email,
				comment: $scope.comment
			});
			clearForm();
		}

		function clearForm() {
			$scope.name = "";
			$scope.email = "";
			$scope.comment = "";
		}

		clearForm();
		$scope.init();

	});
