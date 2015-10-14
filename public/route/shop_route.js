var testApp = angular.module("ShopApp", ["ngRoute", "AdminController", "ShopService"]);
testApp.constant("baseUrl", "/shopping/public/");

testApp.config(['$routeProvider', "baseUrl", routeProvide]);

function routeProvide($routeProvider, baseUrl)
{
	$routeProvider.when("/", {
		templateUrl: baseUrl+"template/shopview.html", 
		controller: "ShoppingController" 								
    }).
    when("/list", {
    	templateUrl: baseUrl+"template/shopItemStore.html",
    	controller: "ShoppingController" 
    });
    
}
