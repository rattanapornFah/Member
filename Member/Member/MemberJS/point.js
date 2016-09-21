app.controller('PointController', ['$scope', '$http','$translate', function ($scope, $http,$translate) {
    $scope.changeLanguage = function (key) {
    $translate.use(key);
  };

    var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberCardsFromMemberId?merchantId=1&memberId=8'
    $http.get(apiName).
        success(function (data) {
            $scope.memberDetails = data.dataResult;
            console.log($scope.memberDetails)
    })
    //var memberDetails = localStorage.getItem('memberDetails');
    //$scope.memberDetails = JSON.parse(memberDetails);
    //console.log(JSON.parse(memberDetails))
}])
