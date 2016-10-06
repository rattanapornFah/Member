app.controller('NavigateController', ['$scope', '$http', '$translate', '$routeParams', '$filter', function ($scope, $http, $translate, $routeParams, $filter) {
   
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

    $scope.durationText = localStorage.getItem('durationText');
    console.log($scope.durationText);

    $scope.backInfo = function () {
        window.location = '#/Infor/' + Number($routeParams.id);
    };

   var options = {
            enableHighAccuracy: true
        };

        navigator.geolocation.getCurrentPosition(function (pos) {
            $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            console.log(JSON.stringify($scope.position));
            console.log($scope.position);
            localStorage.setItem('currentLocationLatitude', pos.coords.latitude);
            localStorage.setItem('currentLocationLongitude', pos.coords.longitude);
        },
                    function (error) {
                        alert('Unable to get location: ' + error.message);
                    }, options);

        console.log(Number($routeParams.id));
       
        
}])