app.controller('PointController', ['$scope', '$http','$translate','$location', function ($scope, $http,$translate,$location) {
    $scope.changeLanguage = function (key) {
    $translate.use(key);
    };
    var card = JSON.parse(localStorage.getItem('memberDetails'));
    var memberApi ='merchantId='+1+'&memberId='+card.memberId;
    var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberCardsFromMemberId?'+memberApi;
    $http.get(apiName).
        success(function (data) {
            console.log(data);
            $scope.memberCardDetails = data.dataResult;
           
           $scope.PathImage1="http://203.150.94.101:8080/Resources/CardImages/Merchant-1/Brand-1/MemberCard-1.png";
           $scope.PathImage2="http://203.150.94.101:8080/Resources/VoucherImages/Merchant-1/Brand-1/Voucher-27.png";
           $scope.PathImage3="http://203.150.94.101:8080/Resources/CardImages/Def-MemberCard.png";
           $scope.PathImage3="http://203.150.94.101:8080/Resources/VoucherImages/Def-Voucher.png";

           console.log($scope.memberCardDetails);
         
        })
    console.log($location.path())
    if ($location.path() == "/Giftcard") {
        $scope.IsGiftCard = 1;
    } else {
        $scope.IsGiftCard = 0;
    }

    //var memberDetails = localStorage.getItem('memberDetails');
    //$scope.memberDetails = JSON.parse(memberDetails);
    //console.log(JSON.parse(memberDetails))
}])
