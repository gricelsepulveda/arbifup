app.controller('pagServiciosController', ['$scope', 'servicio', '$http', function ($scope , upload , $http, $location) 
 {
    $scope.nosotros = $http({
            url: '/arbifup/Servicios/ajax',
            method: "POST",
            data: $.param({'case':1}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.portada = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
    });
    $scope.nosotros = $http({
            url: '/arbifup/Servicios/ajax',
            method: "POST",
            data: $.param({'case':2}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.servicio = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
    });

    $scope.uploadFile = function()
    {

        var user = $scope.user;
        var producto = $scope.producto;
        var descripcion = $scope.descripcion;
        var fono = $scope.fono;
        var correo = $scope.correo;
        var web = $scope.web;
        var file = $scope.file;

        upload.uploadFile(user,producto,descripcion,fono,correo,web,file).then(function(res)
        {
            console.log(res);
            bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
        })
    }

}]);