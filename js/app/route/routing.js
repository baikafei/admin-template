angular.module("main")

.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /dashboard
	$urlRouterProvider.otherwise("/dashboard");
	
	$stateProvider
		.state('dashboard', {
			url: "/dashboard",
			templateUrl: "pages/dashboard/dashboard.html"
		})
		.state('simple', {
			url: "/simple",
			templateUrl: "pages/simple/simple.html"
		});
});
