var app = angular.module('Member', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "Home/Index"
        })
        .otherwise({
            templateUrl: "Home/Index"
        })
});