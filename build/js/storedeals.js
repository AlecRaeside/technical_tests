app.directive("storedeals", function() {
	return {
		restrict:"E",
		replace:true,
		scope: {
			store: "=store"
		},
		templateUrl: "js/templates/storedeals.html",
		controller: ["$scope", "api", "imageUrl", function($scope, api, imageUrl) {
			$scope.logoSize = {
				width: 110,
				height: 88
			};
			$scope.toggleStoreDeals = function() {
				$scope.store.selected = !$scope.store.selected;
				if ($scope.store.selected) {
					$scope.showStoreDeals();
				}
			}

			$scope.showStoreDeals = function() {
				$scope.loading = true;
				api.getStoreDeals($scope.store.code)
					.success(function(deals) {
						angular.forEach(deals, function(deal) {
							api.getRetailer(deal.deal_stores[0].retailer_id).success(function(retailer) {
								if (retailer.logo_ref) {
									deal.image = imageUrl.getImageUrl(retailer.logo_ref, $scope.logoSize.width, $scope.logoSize.height);
								}
								deal.retailerName = retailer.name;
							});
						});
						$scope.deals = deals;
						if ($scope.deals.length == 0) {
							$scope.noDeals = true;
						}
						$scope.loading = false;
					});
			}
			$scope.$watch("store.selected", function(val) {
				if (val) {
					$scope.showStoreDeals();
				}
			});
		}]
	}
});