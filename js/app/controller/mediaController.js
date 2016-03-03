app.controller('mediaController', ['$scope', 'media_Controller', '$http', function ($scope, upload , $http, $location) 
 {
         $scope.tabs = 1
        $scope.selectTab1 = function(tab){
            $scope.slidertab = tab;

        };

    $scope.sumar = function(){
        $scope.cantidad = $scope.cantidad +1 
    }
     $scope.restar = function(){
        if ($scope.cantidad > 1){
            $scope.cantidad = $scope.cantidad -1 
       }
       else{
        bootbox.alert('<h3> El numero de imagenes no puede ser menos a 1</h3>')
       }
    }
    $scope.getTimes = function() {
        return new Array($scope.cantidad);   
    }
    $scope.crear = function(){
        $scope.tabs = 2
        valor = [
            $scope.titulo
        ]

        $scope.cantidad = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':20,'datos':valor}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.proid = parseInt(data)
        
            $scope.cantidad = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':21,'datos':$scope.proid}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.cantidad = parseInt(data[0]['cantidad'])
                $scope.imagen = data[0]['imagen']
        
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
          
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    }
    $scope.uploadFile = function()
    {

        var imagen = $scope.imagen;
        var desc = $scope.desc;
        var tab = $scope.slidertab;
        var file = $scope.file;
   
        upload.uploadFile(file, imagen , desc , tab).then(function(res)
        {
            console.log(res);
            bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
        })
    }

   

}]);