app.controller('feedbackController', ['$scope', function ($scope) {

    // ------------------------------------ JavaScript -------------------------------- //

   // $scope.start = new Date();
    //$scope.end = new Date();

    //$scope.minStartDate = new Date(); //fixed date
    //$scope.maxStartDate = $scope.end; //init value
    //$scope.minEndDate = $scope.start; //init value
    //$scope.maxEndDate = $scope.end; //fixed date same as $scope.maxStartDate init value

    //$scope.$watch('start', function (v) {
    //    $scope.minEndDate = v;
    //});
    //$scope.$watch('end', function (v) {
    //    $scope.maxStartDate = v;
    //});

    
    $scope.feedback = function (branch, star, star1, star2, star3, star4) {
        console.log(branch, star, star1, star2, star3, star4)
    };

    //----------------------------------------------------------------------------------------------//
}])