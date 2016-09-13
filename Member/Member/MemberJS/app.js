var app = angular.module('Member', ['ngRoute','ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "Home/Index"
        })
         .when("/Map", {
             templateUrl: "Map/Map",
             controller: 'MapController'
         })
         .when("/Map2", {
             templateUrl: "Map/Map2"
         })
        .when("/MapByName", {
            templateUrl: "Map/MapByName"
        })
        .when("/Infor", {
            templateUrl: "Map/Infor"
        })
        .when("/showMap", {
            templateUrl: "Map/showMap"
        })
         .when("/Navigate", {
            templateUrl: "Map/Navigate"
         })
         .when("/Navigate2", {
             templateUrl: "Map/Navigate2"
         })
        .when("/Feedback", {
            templateUrl: "Feedback/Feedback"
        })
        .when("/News", {
            templateUrl: "News/News"
        })
        .when("/Unread", {
            templateUrl: "News/Unread"
        })
        .when("/Detail", {
            templateUrl: "News/Detail"
        })
        .when("/Editmember", {
            templateUrl: "Register/Editmember"
        })
         .when("/Card", {
            templateUrl: "Register/Card"
         })
        .when("/Point", {
            templateUrl: "Register/Point"
        })
        .otherwise({
            templateUrl: "/"
        })
});