var signin = angular.module('SigninApp', ['ui.bootstrap','directive.g+signin', 'pascalprecht.translate','ngFacebook']);

signin.controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
//---------------------------------- Sign in with Facebook -----------------------------------------//
signin.config( function( $facebookProvider ) {
    $facebookProvider.setAppId('123551248102766');
})

signin.run( function( $rootScope ) {
    // Load the facebook SDK asynchronously
    (function(){
        // If we've already installed the SDK, we're done
        if (document.getElementById('facebook-jssdk')) {return;}

        // Get the first script element, which we'll use to find the parent node
        var firstScriptElement = document.getElementsByTagName('script')[0];

        // Create a new script element and set its id
        var facebookJS = document.createElement('script'); 
        facebookJS.id = 'facebook-jssdk';

        // Set the new script's source to the source of the Facebook JS SDK
        facebookJS.src = '//connect.facebook.net/en_US/all.js';

        // Insert the Facebook JS SDK into the DOM
        firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }());
});


var FbCtrl = function ($scope, $facebook) {
    
    function refresh() {
        $facebook.api("/me?fields=birthday,email,first_name,last_name,gender,picture").then( 
        function(response) {
            $scope.welcomeMsg = "Welcome " + response.name;
            localStorage.setItem('memberDetails', JSON.stringify(response));
            console.log(response);
                
    },
        function(err) {
          $scope.welcomeMsg = "Please log in";
          console.log(err);
    });
    }
};


//---------------------------------- Sign in with Google -----------------------------------------//

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
        localStorage.setItem("Status", 1);
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
                   console.log(data)

               } else {
                   alert(data.dataResult)
                   console.log(data)
               }

           })
    };

}]);