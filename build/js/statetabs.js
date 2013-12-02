app.directive("statetabs", function() {
	return {
		restrict:"E",
		replace:true,
		scope: {
			selectedState: "=selectedState"
		},
		templateUrl: "js/templates/statetabs.html",
		controller: ["$scope", "api", function($scope, api) {
			api.getStates().success(function(states) {
				$scope.states = states;
			});

			$scope.setState = function(abbreviation) {
				$scope.selectedState = abbreviation;
			}
		}]
	}
});