app.controller('SignupController', ['$scope', function ($scope) {
    $scope.register = {};
    //--------------------------- Register Member ---------------------------------------------------//
    $scope.addMember = function (register) {
        console.log(register)
        var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/InsertNewMemberData?' +
            'merchantId=1&brandId=1&code=1' +
            '&title=' + register.title + '&' +
            'firstName=' + register.firstName + '&' +
            'middleName=' + register.middlename + '&' +
            'lastName=' + register.lastname + '&' +
            'gender=' + register.gender + '&' +
            'address1=' + register.address1 + '&'
            'address2=' + register.address2 + '&'
            'city=' + register.city + '&'
            'provinceId=1' +
            '&zipCode={' + register.zipcode + '}&'
            'countryId=1' +
            '&phoneNo=' + register.phone + '&'
            'mobileNo=' + register.mobile + '&'
            'email=' + register.email + '&'
            'birthday=' + register.birthday + '&'
            'memberGroupId=1&atShopId=1'

    };

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
app.factory('registerService', function ($http) {
    registerService = {};

    app.saveRegistration = function (fromdata) {
        return $http.post('/api/account/register', fromdata)
    }
    return signupService;

})

//app.controller('MemberController', ['$scope', function ($scope) {
//    $http.get("www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromMemberId?merchantId=1&memberId=1").then(function (data) {
//        $scope.myWelcome = data.dataExtra;
//    });
//}])