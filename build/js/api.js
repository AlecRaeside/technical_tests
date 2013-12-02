app.factory("api", ["$http", function($http) {
	var apiRoutes = {
		getStates: "http://www.westfield.com.au/api/centre/master/states.json?country=au",
		getStateStores: "http://www.westfield.com.au/api/centre/master/centres.json?state=",
		getStoreDeals: "http://www.westfield.com.au/api/deal/master/deals.json?state=published&centre=",
		getRetailer: "http://www.westfield.com.au/api/store/master/retailers/"
	}
	var api = {
		getStates: function() {
			return $http.get(apiRoutes.getStates)
		},
		getStateStores: function(state) {
			return $http.get(apiRoutes.getStateStores + state);
		},
		getStoreDeals: function(centre) {
			return $http.get(apiRoutes.getStoreDeals + centre);
		},
		getRetailer: function(retailerId) {
			 return $http.get(apiRoutes.getRetailer + retailerId + ".json")
		},

	}
	return api;
}]);