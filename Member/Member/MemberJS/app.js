var app = angular.module('Member', ['ngRoute', 'ui.bootstrap', 'pascalprecht.translate','ja.qr']);
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
             templateUrl: "Map/Map2",
             controller: 'MapController'
         })
        .when("/MapByName", {
            templateUrl: "Map/MapByName",
            controller: 'SortNameController'
        })
        .when("/Infor/:id", {
            templateUrl: "Map/Infor",
            controller: 'InforController'
        })
        .when("/showMap", {
            templateUrl: "Map/showMap"
        })
         .when("/Navigate/:id", {
             templateUrl: "Map/Navigate",
             controller: 'NavigateController'
         })
         .when("/Navigate2", {
             templateUrl: "Map/Navigate2",
             controller: 'NavigateController'
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
        .when("/Giftcard", {
            templateUrl: "Register/Point"
        })
        .otherwise({
            templateUrl: "/"
        })
});
app.controller('langCtrl', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

     $scope.logout= function () {
         localStorage.removeItem();
     }
});

