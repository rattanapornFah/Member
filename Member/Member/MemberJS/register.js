app.controller('RegisterController', ['$scope', function ($scope) {
    $scope.register = {};
    //--------------------------- Register Member ---------------------------------------------------//
    $scope.addMember = function (register) {
        console.log(register)
        var apiName = 'http://www.vtec-system.com:8080/LoyaltyApi/Member/InsertNewMemberData?' + 
            'merchantId={0}&brandId={0}&code={0}' +
            '&title={' + register.title + '}&' +
            'firstName={' + register.firstName + '}&' +
            'middleName={' + register.middlename + '}&' +
            'lastName={' + register.lastname + '}&' +
            'gender={' +register.gender + '}&' +
            'address1={' +register.address1 + '}&'
            'address2={' + register.address2 + '}&'
            'city={' +register.city + '}&'
            'provinceId={0}' +
            '&zipCode={' +register.zipcode+ '}&'
            'countryId={0}' +
            '&phoneNo={' +register.phone+ '}&'
            'mobileNo={' +register.mobile+ '}&'
            'email={' +register.email+ '}&'
            'birthday={' +register.birthday+ '}&'
            'memberGroupId={0}&atShopId={0}'

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

//app.controller('MemberController', ['$scope', function ($scope) {
//    $http.get("www.vtec-system.com:8080/LoyaltyApi/Member/GetMemberDataFromMemberId?merchantId=1&memberId=1").then(function (data) {
//        $scope.myWelcome = data.dataExtra;
//    });
//}])
