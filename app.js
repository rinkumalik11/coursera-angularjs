
(function (){

	'use strict';

			var app = angular.module('app', []).
		controller('MainController', myFunction);

		myFunction.$inject = ['$scope'];

		function myFunction ($scope){

			$scope.message = " ";

			$scope.prof_name = "YAAKOV CHAIKIN";

			$scope.stu_name = "RINKU MALIK";

			$scope.eatables = "";

			$scope.value = 0;

			$scope.cal = function (){

				var totalItems = stringSplit($scope.eatables);

				$scope.value = totalItems;

				if(totalItems == 0){
					$scope.message = "Please enter something";
				}else if(totalItems <= 3){
					$scope.message = "Enjoy!";
				}else{
					$scope.message = "TOO MUCH!";
				}
			};

			function stringSplit(string){
				if(!string){
					var x = 0;
					return x;
				}else{
					var array = string.split(",");

					var x = array.length;

					return x;
				}
			};



		};

})();