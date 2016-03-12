app.controller('pagQuienesController', ['$scope', '$http', function ($scope , $http, $location) 
 {
    $scope.nosotros = $http({
            url: '/arbifup/Quienes/ajax',
            method: "POST",
            data: $.param({'case':1}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.quienes = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    $scope.nosotros = $http({
            url: '/arbifup/Quienes/ajax',
            method: "POST",
            data: $.param({'case':2}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.somos = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    $scope.nosotros = $http({
            url: '/arbifup/Quienes/ajax',
            method: "POST",
            data: $.param({'case':3}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.directiva = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    $scope.nosotros = $http({
            url: '/arbifup/Quienes/ajax',
            method: "POST",
            data: $.param({'case':4}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.miembros = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

}]);