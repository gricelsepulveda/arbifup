app.controller('pagSliderController', ['$scope', '$http', function ($scope , $http, $location) 
 {
       
    $scope.nosotros = $http({
            url: '/arbifup/Welcome/ajax',
            method: "POST",
            data: $.param({'case':1}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.slider = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

}]);