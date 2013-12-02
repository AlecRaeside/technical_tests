app.directive("stores", function() {
	return {
		restrict:"E",
		replace:true,
		scope: {
			selectedState: "=selectedState"
		},
		templateUrl: "js/templates/stores.html",
		controller: ["$scope", "api", "geolocation", function($scope, api, geolocation) {
			var changeState = function() {
				if ($scope.selectedState) {
					api.getStateStores($scope.selectedState).success(function(stores) {
						if (stores.length > 0) {
							$scope.stores = stores;
							if ($scope.coords) {
								calculateClosestStore(stores);
							}
							
						}
					});
				}
			}

			var calcDistance = function(lat1, lng1, lat2, lng2) {
				var dist = Math.sqrt(Math.pow((parseFloat(lat2)-lat1),2) + Math.pow((parseFloat(lng2)-lng1),2));
				return dist;
			}

			var calculateClosestStore = function(stores) {
				var shortestDistance = null;
				var closestStoreIndex = null;
				angular.forEach(stores, function(store, index) {
					
					var distance = calcDistance($scope.coords.latitude, $scope.coords.longitude, store.latitude, store.longitude);
					if (distance < shortestDistance || shortestDistance == null) {
						shortestDistance = distance;
						closestStoreIndex = index;
					}
				});
				$scope.stores[closestStoreIndex].selected = true;
				$scope.stores[closestStoreIndex].closest = true;

			}

			geolocation.getLocation().then(function(data) {
				$scope.coords = data.coords;
			});

			$scope.$watch("selectedState", changeState);
		}]
	}
});