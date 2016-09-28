app.controller('InforController', ['$scope', '$http', function ($scope, $http) {


    $http.get("http://www.vtec-system.com:8080/LoyaltyApi/Stores/GetListAllStoresOfBrand?merchantId=1&brandId=1").success(function (data) {
        $scope.myWelcome = data.dataResult;
        $scope.PathImage = "http://203.150.94.101:8080/Resources/StoreImages/Merchant-1/Brand-1/";
        console.log($scope.myWelcome);

  })
       
    }])