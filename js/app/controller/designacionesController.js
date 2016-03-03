app.controller('designacionesController', ['$scope', 'designaciones', '$http', function ($scope, upload , $http, $location) 
 {
               var tab = 2;
        $scope.selectTab = function(tab){
            $scope.tab = tab;
        };
    
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