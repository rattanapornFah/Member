app.controller('NavigateController', ['$scope', '$http', '$translate', function ($scope, $http) {

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

    $http.get("http://www.vtec-system.com:8080/LoyaltyApi/Stores/GetListAllStoresOfBrand?merchantId=1&brandId=1").success(function (data) {
        $scope.myWelcome = data.dataResult;
        console.log($scope.myWelcome);

        var cities = $scope.myWelcome;
        console.log($scope.myWelcome);

        var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(25, 80),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.storeLatitude, info.storeLongitude),
            title: info.storeName
        });
        marker.content = '<div class="infoWindowContent">' + info.storeAddress1 + '<br />' + info.storeLatitude + ' E,' + info.storeLongitude + ' N, </div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' +
              marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }

    for (i = 0; i < cities.length; i++) {
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

    });

}])