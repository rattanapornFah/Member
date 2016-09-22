app.controller('RegisterController', ['$scope','$http', function ($scope,$http) {
    $scope.register = {};
    
    if (Number(localStorage.getItem('Status')) == 1) {
        var register = JSON.parse(localStorage.getItem('MyProfile'));
        $scope.register.first_name = register.FirstName;
        $scope.register.last_name = register.LastName;
        $scope.register.email = register.Email;
        $scope.register.image = register.ImageProfile;

    } else { }
    //    $scope.register = JSON.parse(localStorage.getItem('memberDetails'));
    //    $scope.register.image = $scope.register.data.url;
    //}


    $scope.Cancel = function () {
        var accessToken = sessionStorage.getItem(oauth2_tr);
        console.log(accessToken);
      //  $http.jsonp('https://accounts.google.com/o/oauth2/revoke?token=' +
      //accessToken, {
      //    params: {
      //        callback: 'JSON_CALLBACK',
      //        format: 'json'
      //    }
      //}).success( /* Do stuff on success */);
    //    window.location = "../Login/login";
    }

    //--------------------------- Register Member with facebook ---------------------------------------------------//
    $scope.addMember = function (register) {
        console.log(register)
        var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/InsertNewMemberData?' + 
            'merchantId=1&brandId=1&code=001' +
            '&title=' + register.title + '&' +
            'firstName=' + register.first_name+ '&' +
            'middleName=' + register.middlename + '&' +
            'lastName=' + register.last_name ;
            'gender=' +register.gender + '&' +
            'address1=' +register.address1 + '&'+
            'address2=' + register.address2 + '&'+
            'city=' +register.city + '&'+
            'provinceId=77' +
            '&zipCode=' +register.zipcode+ '&'+
            'countryId=2' +
            '&phoneNo=' +register.phone+ '&'+
            'mobileNo=' +register.mobile+ '&'+
            'email=' +register.email+ '&'+
            'birthday=' +register.birthday+ '&'+
            'memberGroupId=1&atShopId=1'
         
            console.log(apiName)
             $http.get(apiName)
             .success(function (data) {
                 parent.location = '/#/Point';
            })

   }
   
    
    
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

