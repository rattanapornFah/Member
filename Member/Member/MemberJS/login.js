app.controller('LoginController', ['$scope', function ($scope) {
    $scope.register = {};
    //--------------------------- Log in---------------------------------------------------//
    $scope.addMember = function (login) {
        console.log(login)
        var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromUserNamePassword?' +
        'merchantId={' +merchantId+ '}&'
        'memberUserName={' +memberUserName+ '}&'
        'memberPassword = {' +memberPassword+ '}'
            

    };
}])
