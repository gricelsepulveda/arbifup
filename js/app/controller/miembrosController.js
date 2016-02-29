app.controller('miembrosController', ['$scope', 'miembros', '$http', function ($scope, upload , $http,  $location) 
    {
        var tab = 1;
        $scope.selectTab1 = function(tab){
            $scope.tab = tab;
        };
            var tab = 1;
            $scope.slider = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':6,'miembros': tab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.slider = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
            $scope.selectTab = function(slidertab){
            $scope.slidertab = slidertab;
            $scope.slider = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':6,'miembros': $scope.slidertab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.slider = data;

               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
        };

    $scope.uploadFile = function()
    {

        var tab = $scope.slidertab;
        var file = $scope.file;
        switch(tab){
            case 1:
            var titulo = $scope.titulo;
            var desc = $scope.descripcion;
           
            break;
            case 2:
            var titulo = $scope.titulo2;
            var desc = $scope.descripcion2;
           
            break;
            case 3:
            var titulo = $scope.titulo3;
            var desc = $scope.descripcion3;
            
            break;
        } 
        upload.uploadFile(file, titulo , desc  ,tab).then(function(res)
        {
            console.log(res);
            bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
        })
    }
}])