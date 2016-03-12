app.controller('pagNoticiasController', ['$scope', '$http', function ($scope , $http, $location) 
 {
    $scope.arbifup = $http({
            url: '/arbifup/Noticias/ajax',
            method: "POST",
            data: $.param({'case':2}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.portada = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

    $scope.arbifup = $http({
            url: '/arbifup/Noticias/ajax',
            method: "POST",
            data: $.param({'case':1}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.todo = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
       
    $scope.arbifup = $http({
            url: '/arbifup/Welcome/ajax',
            method: "POST",
            data: $.param({'case':2}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.noticias = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    $scope.arbifup = function(){
       $http({
            url: '/arbifup/Welcome/ajax',
            method: "POST",
            data: $.param({'case':2}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.noticias = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    }

    $scope.futbol = function(){
       $http({
            url: '/arbifup/Welcome/ajax',
            method: "POST",
            data: $.param({'case':3}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.noticias = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    }

}]);