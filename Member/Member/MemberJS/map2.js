app.controller('Map2Controller', ['$scope', '$http', function ($scope, $http) {

    $http.get("http://www.vtec-system.com:8080/LoyaltyApi/Stores/GetListAllStoresOfBrand?merchantId=1&brandId=1").success(function (data) {
        $scope.myWelcome = data.dataResult;
        console.log($scope.myWelcome);
        
        var cities = $scope.myWelcome;

        var mapOptions = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 13.752457, lng: 100.525943 },
            zoom: 10
        });
      
        //var infoWindows = new google.maps.InfoWindow({ map: mapOptions });

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };               

                var contentString = 
            '<div id="siteNotice">' +
            '</div>' +
            '<h3 id="firstHeading" class="firstHeading">Your Current Location</h1>' +            
            '</div>' +
            '</div>';

                var infowindowCurrent = new google.maps.InfoWindow({
                    content: contentString
                });

                var markerCurrent = new google.maps.Marker({
                    position: pos,
                    map: mapOptions,
                    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=home|FFFF00',
                });
                markerCurrent.addListener('click', function () {
                    infowindowCurrent.open(mapOptions, markerCurrent);
                });

                //infoWindows.setPosition(pos);
                //infoWindows.setContent('Your Current Location');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindows, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindows, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindows, pos) {
            infoWindows.setPosition(pos);
            infoWindows.setContent(browserHasGeolocation ?
                                  'Error: The Geolocation service failed.' :
                                  'Error: Your browser doesn\'t support geolocation.');
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
     

        var infoWindow = new google.maps.InfoWindow();

        $scope.markers = [];

        var createMarker = function (info) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=restaurant|FF0000',            
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(info.storeLatitude, info.storeLongitude),
                title: info.storeName
            });
            marker.addListener('click', toggleBounce);
            marker.content = '<div class="infoWindowContent">' + info.storeAddress1 + '<br />' + info.storeLatitude + ' E,' + info.storeLongitude + ' N, </div>';

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            }

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
 
        $scope.openInfoWindow = function (storeName, selectedMarker) {
            storeName.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    });

    }])