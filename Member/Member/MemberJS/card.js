app.controller('CardController', ['$scope', '$http', '$translate', function ($scope, $http, $translate) {
        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

 
}])
