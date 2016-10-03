app.controller('NavigateController', ['$scope', '$http', '$translate', '$routeParams', function ($scope, $http, $translate,$routeParams) {

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

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
            //var currentLocations = [
            //    $scope.position
            //];
            //console.log(currentLocations);
        },
                    function (error) {
                        alert('Unable to get location: ' + error.message);
                    }, options);

        console.log(Number($routeParams.id));
       
}])