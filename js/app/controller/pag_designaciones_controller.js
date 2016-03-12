app.controller('pagDesignacionesController', ['$scope', '$http', function ($scope , $http, $location) 
 {
    $scope.arbifup = $http({
            url: '/arbifup/Designaciones/ajax',
            method: "POST",
            data: $.param({'case':1}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.designaciones = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
            $scope.arbifup = $http({
            url: '/arbifup/Designaciones/ajax',
            method: "POST",
            data: $.param({'case':2}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.portada = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

  
       

}]);