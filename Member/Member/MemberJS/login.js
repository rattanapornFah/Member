app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {
    $scope.register = {};

    //--------------------------- Log in---------------------------------------------------//
    $scope.login = function (login) {

          var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromUserNamePassword?' +
        'merchantId=1&'+
        'memberUserName=' + login.username + '&'+
        'memberPassword=' + login.password + ''
      
         
         $http.get(apiName)
            .success(function (data) {
                if (data.status == 0) {
                    $scope.memberDetails = data.dataResult;
                    localStorage.setItem('memberDetails', JSON.stringify($scope.memberDetails))
                    //parent.location = '/#/Point';
                    //console.log(data)
                } else {
                    alert(data.dataResult)
                    //console.log(data)
                }
                
            })
    };
  
}])
