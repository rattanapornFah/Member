﻿app.controller('MapController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {

    $http.get("http://www.vtec-system.com:8080/LoyaltyApi/Stores/GetListAllStoresOfBrand?merchantId=1&brandId=1").success(function (data) {
       $scope.myWelcome = data.dataResult;
        console.log($scope.myWelcome);
        $scope.PathImage = "http://203.150.94.101:8080/Resources/StoreImages/Merchant-1/Brand-1/";
                
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