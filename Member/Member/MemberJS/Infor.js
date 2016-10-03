app.controller('InforController', ['$scope', '$http', '$routeParams', '$filter', function ($scope, $http, $routeParams, $filter) {


    $http.get("http://www.vtec-system.com:8080/LoyaltyApi/Stores/GetListAllStoresOfBrand?merchantId=1&brandId=1").success(function (data) {
        $scope.myWelcome = data.dataResult;
        $scope.PathImage = "http://203.150.94.101:8080/Resources/StoreImages/Merchant-1/Brand-1/";
        console.log($scope.myWelcome);

        var FilterMyWelcome = $filter('filter')($scope.myWelcome, { storeId: Number($routeParams.id) });

        localStorage.setItem('currentStoreLatitude', FilterMyWelcome[0].storeLatitude);
        localStorage.setItem('currentStoreLongitude', FilterMyWelcome[0].storeLongitude);
    })

    $scope.toNavigate = function () {
        window.location = "#/Navigate/" + Number($routeParams.id);
    };
       
    }])