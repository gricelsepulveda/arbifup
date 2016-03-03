app.controller('noticiasController', ['$scope', 'noticias', '$http', function ($scope, upload , $http, $location) 
 {
        var codNoticia = 0
        var codImagen = 0
        
       $scope.persons = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':9}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
              
        }).error(function (data, status, headers, config) {
            $scope.status = status;
        });
         $scope.crear = function(){
            var codImagen = 0
            var val = [
               $scope.titulo,
               $scope.txt1,
               $scope.enlace,
               $scope.categoria
           ]
           $scope.persons = $http({
                url: '/arbifup/administracion/ajax',
                method: "POST",
                data: $.param({'case':10,'noticias': val }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data, status, headers, config) {
                codNoticia = data

               bootbox.confirm("<h3>Atención</h3> Ha creado un producto con exito, Favor de ingresar las imagenes",function(confirm){
                    if(confirm)
                    {
                               var slidertab = 0
                               var tab2 = 0
                               $scope.slidertab = slidertab;
                               var valor = 
                               [
                                    codNoticia,
                               ]

                              $scope.persons = $http({
                                    url: '/arbifup/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':11,'noticia': valor }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                  // $route.reload();
                                  codImagen = data[0]['imagen']
                                   
                                }).error(function (data, status, headers, config) {
                                });
                                $scope.tab2 = 1;
                                 var dat = [
                                        slidertab,
                                        codImagen,
                                    ]
                      
                                 //traer imagenes
                                $scope.persons = $http({
                                    url: '/arbifup/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':12,'codImagen': dat }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                  // $route.reload();
                                  $scope.img = data
                                    
                                }).error(function (data, status, headers, config) {
                                });      
                     }            
                })
                          
            
            }).error(function (data, status, headers, config) {
            });

        }
         $scope.selectTab1 = function(slidertab){
           var codImagen = 0    
         $scope.slidertab = slidertab;
               var valor = 
               [
                    codNoticia,
               ]
             
              $scope.persons = $http({
                    url: '/arbifup/administracion/ajax',
                    method: "POST",
                    data: $.param({'case':11,'noticia': valor }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                  // $route.reload();
                  codImagen = data[0]['imagen']
                  $scope.codImagen = data[0]['imagen']
                   var dat = [
                    slidertab,
                    codImagen,
                ]
            
                //traer imagenes
                $scope.persons = $http({
                    url: '/arbifup/administracion/ajax',
                    method: "POST",
                    data: $.param({'case':12,'codImagen': dat }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                  // $route.reload();
                  $scope.img = data 
         
                }).error(function (data, status, headers, config) {
                });
                    
                }).error(function (data, status, headers, config) {
                });


            }
        
            $scope.uploadFile = function()
            {
                 
                    var tab = $scope.slidertab;
                    var file = $scope.file;
                    var img = $scope.codImagen;

                    upload.uploadFile(file, tab, img).then(function(res)
                    {
                        console.log(res);
                        bootbox.alert('<h3> Imagen agregada con exito con exito!!</h3>')
                    })
            }
}]);