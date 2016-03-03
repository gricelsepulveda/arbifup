app.controller('desigPortadaController', ['$scope', 'desig_portada', '$http', function ($scope, upload , $http, $location) 
 {
               var tab = 2;
        $scope.selectTab = function(tab){
            $scope.tab = tab;
        };
    $scope.nosotros = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':22}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.nosotros = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

    $scope.uploadFile = function()
    {
        var titulo = $scope.titulo;
        var txt1 = $scope.txt1;
        var file = $scope.file;
   
        upload.uploadFile(file, titulo , txt1).then(function(res)
        {
            console.log(res);
            bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
        })
    }

}]);