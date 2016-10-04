app.controller('EditController', ['$scope', '$http','$translate', function ($scope, $http,$translate) {
    
     $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
     $scope.memberDetails = {};

    //--------------------EditMember ----------------//
     if (localStorage.getItem('loginStatus') == 0) {

         var member = JSON.parse(localStorage.getItem('memberDetails'));
         var memberApi = 'merchantId=' +1+ '&memberId=' + member.memberId;
            var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromMemberId?'+memberApi;
            $http.get(apiName).
                success(function (data) {
                    $scope.memberDetails = data.dataExtra;

                    $scope.memberDetails.birthday = new Date(data.dataExtra.birthday);
                    console.log($scope.memberDetails)
                })
     } else {
         $scope.memberDetails = JSON.parse(localStorage.getItem('memberDetails'));
     }
        
   
    var loadBaseMemberData = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/LoadBaseMemberData?' +
    'merchantId=1&brandId=1';
    $http.get(loadBaseMemberData).
        success(function (data) {
            $scope.provinces = data[1];
            //console.log($scope.provinces);
            $scope.countries = data[2];
          
        })

    //--------------------------- Update Member Details---------------------------------------------------//
    $scope.update = function (memberDetails) {
        
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
            'provinceId=' + memberDetails.province + '&' +
            'zipCode=' + memberDetails.zipCode + '&' +
            'countryId=' + memberDetails.country + '&' +
            'phoneNo=' + memberDetails.phone + '&' +
            'mobileNo=' + memberDetails.mobileNo + '&' +
            'email=' + memberDetails.email + '&' +
            'birthday=' + moment(memberDetails.birthday).format('YYYY-MM-DD') + '&' +
            'atShopId=1';

        console.log(apiName);
        debugger;
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