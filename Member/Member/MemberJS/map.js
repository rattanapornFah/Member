app.controller('MapController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {

    $http.get("http://www.vtec-system.com:8080/LoyaltyApi/Stores/GetListAllStoresOfBrand?merchantId=1&brandId=1").success(function (data) {
       $scope.myWelcome = data.dataResult;
        console.log($scope.myWelcome);
        $scope.PathImage = "http://203.150.94.101:8080/Resources/StoreImages/Merchant-1/Brand-1/";
        
        var cities = $scope.myWelcome;
        
        //for (i = 0 ; i < $scope.myWelcome.length; i++) {
        //    $scope.myWelcome[i].distance = 0;
        //    $scope.myWelcome[i].distanceText = "";
        //}      

        var destinationLocation = [];
        for (var i = 0; i < $scope.myWelcome.length; i++) {

            var store = $scope.myWelcome[i];

            destinationLocation.push({
                lat: store.storeLatitude,
                lng: store.storeLongitude
            });
        }

        //var currentLocations = [{
        //  lat: 13.841611799999999,
        //  lng: 100.6349315        
        //}];
        
        var options = {
            enableHighAccuracy: true
        };


        navigator.geolocation.getCurrentPosition(function (pos) {
            $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            console.log(JSON.stringify($scope.position));
            console.log($scope.position);

            var currentLocations = [
                $scope.position
            ];

            console.log(currentLocations);
            var service = new google.maps.DistanceMatrixService;
            service.getDistanceMatrix({
                origins: currentLocations,
                destinations: destinationLocation,
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, function (response, status) {
                if (status !== 'OK') {
                    alert('Error was: ' + status);
                } else {
                    /* json return like this
                    {
                      "rows": [
                        {
                          "elements": [
                            {
                              "distance": {
                                "text": "17.4 กม.",
                                "value": 17400
                              },
                              "duration": {
                                "text": "25 นาที",
                                "value": 1473
                              },
                              "status": "OK"
                            },
                            {
                              "distance": {
                                "text": "7.5 กม.",
                                "value": 7508
                              },
                              "duration": {
                                "text": "12 นาที",
                                "value": 696
                              },
                              "status": "OK"
                            }
                          ]
                        }
                      ],
                      "originAddresses": [
                        "ถนน ประดิษฐ์มนูธรรม - Pradist Manudharm Rd - ทางด่วนรามอินทรา-อาจณรงค์ แขวง ลาดพร้าว เขต ลาดพร้าว กรุงเทพมหานคร 10230 ประเทศไทย"
                      ],
                      "destinationAddresses": [
                        "1325 ถนน สุขุมวิท แขวง พระโขนงเหนือ เขต วัฒนา กรุงเทพมหานคร 10110 ประเทศไทย",
                        "ซอย รามอินทรา 7 แขวง อนุสาวรีย์ เขต บางเขน กรุงเทพมหานคร 10220 ประเทศไทย"
                      ]
                    }
                    */

                    var currentLocationList = response.originAddresses;
                    var destinationList = response.destinationAddresses;

                    for (var i = 0; i < currentLocationList.length; i++) {
                        var elements = response.rows[i].elements;
                        for (var j = 0; j < elements.length; j++) {
                            $scope.myWelcome[j].distance = elements[j].distance.value;
                            $scope.myWelcome[j].distanceText = elements[j].distance.text;
                            $scope.myWelcome[j].duration = elements[j].duration.value;
                            $scope.myWelcome[j].durationText = elements[j].duration.text;                         
                        }
                    }
                    display();
                }

            });
        },
                    function (error) {
                        alert('Unable to get location: ' + error.message);
                    }, options);


        //-------------------------------------------------------------------

        function display() {           
            // sort by distance
            $scope.myWelcome.sort(compare);
            //html += "</br><b>after sort</b></br>";           
            for (var i = 0; i < $scope.myWelcome.length; i++) {
                var store=($scope.myWelcome[i]);              
            }
        }

        function compare(a, b) {
            if (a.distance < b.distance)
                return -1;
            if (a.distance > b.distance)
                return 1;
            return 0;
        }

        //-------------------------------------------------------------------

        var mapOptions = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 13.841611799999999, lng: 100.6349315},
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
 
    $scope.infor = function (storeId) {
        var FilterMyWelcome = $filter('filter')($scope.myWelcome, { storeId: storeId });
        console.log(FilterMyWelcome);
        localStorage.setItem('durationText', FilterMyWelcome[0].durationText);
        window.location = '#/Infor/'+ storeId;
    };
    
    $scope.mapByName = function () {
        window.location = '#/MapByName/';
    };
    
}])