app.controller('RegisterController', ['$scope', '$http', function ($scope, $http) {   
    $scope.register = {};
    $scope.register.gender = 1;

    $scope.Cancel = function () {
        parent.location = '/Login/login';
    }

    //--------------------------- Register Member ---------------------------------------------------//
    $scope.addMember = function (register) {
        console.log(register)
        var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/InsertNewMemberData?' + 
            'merchantId=1&brandId=1&code=001' + '&' +
            'title=' +register.title+ '&' +
            'firstName=' +register.first_name+ '&' +
            'middleName=' +register.middlename+ '&' +
            'lastName=' +register.last_name+ '&' +
            'gender=' + register.gender + '&' +
            'address1=' +register.address1 + '&'+
            'address2=' + register.address2 + '&'+
            'city=' +register.city + '&'+
            'provinceId=2' + '&' +
            'zipCode=' +register.zipcode+ '&'+
            'countryId=2' + '&' +
            'phoneNo=' +register.phone+ '&'+
            'mobileNo=' +register.mobile+ '&'+
            'email=' +register.email+ '&'+
            'birthday=' + moment(register.birthday).format('YYYY-MM-DD') + '&' +
            'memberGroupId=1&atShopId=1'
         
        console.log(apiName);
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

