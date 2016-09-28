app.controller('GiftcardController', ['$scope', '$http','$translate', function ($scope, $http,$translate) {
    $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
    var member = JSON.parse(localStorage.getItem('memberDetails'));
    var memberApi = 'merchantId=' + 1 + '&memberId=' + member.memberId;
    var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberCardsFromMemberId?' + memberApi;
    $http.get(apiName).
        success(function (data) {
            $scope.memberDetails = data.dataResult;
           
             $scope.PathImage1="http://203.150.94.101:8080/Resources/CardImages/Merchant-1/Brand-1/MemberCard-1.png";
           $scope.PathImage2="http://203.150.94.101:8080/Resources/VoucherImages/Merchant-1/Brand-1/Voucher-27.png";
          console.log($scope.memberDetails)
    })
    //var memberDetails = localStorage.getItem('memberDetails');
    //$scope.memberDetails = JSON.parse(memberDetails);
    //console.log(JSON.parse(memberDetails))
}])
