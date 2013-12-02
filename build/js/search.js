app.directive("search", function() {
	return {
		restrict:"E",
		replace:true,
		templateUrl: "js/templates/search.html",
		controller: ["$scope", "api", function($scope, api) {
		
		}]
	}
});