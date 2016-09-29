app.controller('EditController', ['$scope', '$http','$translate', function ($scope, $http,$translate) {
    
     $scope.changeLanguage = function (key) {
    $translate.use(key);
  };

    //--------------------EditMember ----------------//
    var member = JSON.parse(localStorage.getItem('memberDetails'));
    var memberApi = 'merchantId=' +1+ '&memberId=' + member.memberId;
    var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromMemberId?'+memberApi;
    $http.get(apiName).
        success(function (data) {
            $scope.memberDetails = data.dataExtra;
            //console.log($scope.memberDetails)
        })

    //--------------------------- Update Member Details---------------------------------------------------//
    $scope.update = function (memberDetails) {
        console.log(memberDetails)
        var member = JSON.parse(localStorage.getItem('memberDetails'));
        var memberApi = 'merchantId=' + 1 + '&memberId=' + member.memberId;
        var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/UpdateMemberProfile?'+memberApi+
            '&title=' + memberDetails.title + '&' +
            'firstName=' + memberDetails.firstName + '&' +
            'middleName=' + memberDetails.middlename + '&' +
            'lastName=' + memberDetails.lastName + '&' +
            'gender=' + memberDetails.gender + '&' +
            'address1=' + memberDetails.address1 + '&' +
            'address2=' + memberDetails.address2 + '&' +
            'city=' + memberDetails.city + '&' +
            'provinceId=' + 1 + '&' +
            '&zipCode=' + memberDetails.zipCode + '&' +
            'countryId=' + 1 + '&' +
            '&phoneNo=' + memberDetails.phone + '&' +
            'mobileNo=' + memberDetails.mobileNo + '&' +
            'email=' + memberDetails.email + '&' +
            'birthday=' + memberDetails.birthday + '&' +
            'atShopId=' + 1;

            console.log(apiName);
        $http.get(apiName)
        .success(function (data) {
            if (data.status == 0) {
                console.log(data);
                $('#myModal').modal('show');
            } else {
                alert(data.dataResult);
                //console.log(data)
            }
         
        })
        

    }



    // ------------------------------------ JavaScript -------------------------------- //


    $scope.start = new Date();

    $scope.format = "yyyy/MM/dd";
    $scope.altInputFormats = ['yyyy/M!/d!'];
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