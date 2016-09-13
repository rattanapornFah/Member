app.controller('MapController', ['$scope', '$http', function ($scope, $http) {

    $http.get("http://www.vtec-system.com:8080/LoyaltyApi/Stores/GetListAllStoresOfBrand?merchantId=1&brandId=1").success(function (data) {
        $scope.myWelcome = data.dataResult;
        console.log($scope.myWelcome);
    });

}])