app.directive("stores", function() {
	return {
		restrict:"E",
		replace:true,
		scope: {
			selectedState: "=selectedState"
		},
		templateUrl: "js/templates/stores.html",
		controller: ["$scope", "api", function($scope, api) {
			var changeState = function() {
				if ($scope.selectedState) {
					api.getStateStores($scope.selectedState).success(function(stores) {
						$scope.stores = stores;
					});
				}
			}

			$scope.$watch("selectedState", changeState);
		}]
	}
});