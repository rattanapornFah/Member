app.controller('EditController', ['$scope', '$http','$translate', function ($scope, $http,$translate) {
    
     $scope.changeLanguage = function (key) {
    $translate.use(key);
  };

    //--------------------Edit ----------------//
    var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromMemberId?merchantId=1&memberId=8'
    $http.get(apiName).
        success(function (data) {
            $scope.memberDetails = data.dataExtra;
            console.log($scope.memberDetails)
})


    // ------------------------------------ JavaScript -------------------------------- //

    $scope.start = new Date();
    //$scope.end = new Date();

    //$scope.minStartDate = new Date(); //fixed date
    //$scope.maxStartDate = $scope.end; //init value
    //$scope.minEndDate = $scope.start; //init value
    //$scope.maxEndDate = $scope.end; //fixed date same as $scope.maxStartDate init value

    //$scope.$watch('start', function (v) {
    //    $scope.minEndDate = v;
    //});
    //$scope.$watch('end', function (v) {
    //    $scope.maxStartDate = v;
    //});

    $scope.format = "dd/MM/yyyy";
    $scope.altInputFormats = ['d!/M!/yyyy'];
    $scope.dateOptions = {
        startingDay: 0,
        showWeeks: false
    };

    $scope.popupStart = {
        opened: false
    };

    $scope.openStart = function () {
        $scope.popupStart.opened = true;
    };

    $scope.popupEnd = {
        opened: false
    };

    $scope.openEnd = function () {
        $scope.popupEnd.opened = true;
    };

    //----------------------------------------------------------------------------------------------//
}])