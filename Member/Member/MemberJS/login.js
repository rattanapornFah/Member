var signin = angular.module('SigninApp', ['ui.bootstrap','directive.g+signin', 'pascalprecht.translate']);

signin.controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

//---------------------------------- Sign in with Google -----------------------------------------//
    $scope.statusLogin = -1;

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
        // User successfully authorized the G+ App!
        console.log('Signed in!');
        var user = authResult.w3;
        var userdata = {
            "ImageProfile": user.Paa,
            "FirstName": user.ofa,
            "LastName": user.wea,
            "Email": user.U3
        }
        localStorage.setItem('loginStatus', 1);
        localStorage.setItem("MyProfile", JSON.stringify(userdata));
        window.location = "/#/Point";

    });
    $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
        // User has not authorized the G+ App!
        console.log('Not signed into Google Plus.');
    });

    $scope.register = {};

    //--------------------------------------- Log in---------------------------------------------//
    $scope.signin = function (signin) {

        var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromUserNamePassword?' +
      'merchantId=1&' +
      'memberUserName=' + signin.username + '&' +
      'memberPassword=' + signin.password + ''

        $http.get(apiName)
           .success(function (data) {
               if (data.status == 0) {
                   $scope.memberDetails = data.dataResult;
                   localStorage.setItem('memberDetails', JSON.stringify($scope.memberDetails));
                   parent.location = '/#/Point';
                   console.log(data);

                   $scope.statusLogin = 1;

                   localStorage.setItem('loginStatus', 0);

               } else {
                   $scope.statusLogin = 0;
  
               }
       })
    };

}]);