app.controller('serviciosController', ['$scope', 'med_portada', '$http', function ($scope, upload , $http, $location) 
 {
        var cod = 0
         var tab = 1;
        $scope.selectTab = function(tab){
            $scope.tab = tab;
        };
    $scope.nosotros = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':23}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
              
               $scope.estado = data
            var tabs = 1
            var color = "red";
              for (var i = 0; i < data.length; i++) {
                if(i%2)
                {
                    clase = "destacado_gral_2";
                }
                else
                {
                    clase = "destacado_gral";
                }
                    $scope.prueba = "<div id='hola"+i+"' class='test "+clase+"' data-cod="+data[i].id+" data-img="+data[i].imagen+" data-titulo='"+data[i].titulo+"' data-desc='"+data[i].descripcion+"' "+
                         "data-enlace='"+data[i].link+"' data-categoria='"+data[i].cat+"' "+
                        // "style='background-color:"+color+";' "+
                         "data-toggle='modal' data-target='#producto'>Titulo: "+data[i].user+ " <br>Categoria: "+data[i].producto+ "<br>Codigo Noticia: "+data[i].estado+ "</div>"
                        var prueba = $scope.prueba
                            $("#hola").append(prueba)

                        };

            

                        
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
             $("#hola").on("click", ".test", function(){
                        //$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");
                    $scope.cod = $(this).data('cod')
                   
            })
         $scope.eliminar = function(){
                     cod =  $scope.cod
                     var datos = [
                                        cod,
                                    ]
                     $scope.persons = $http({
                                    url: '/arbifup/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':24,'datos': datos }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                    $(".modal").modal('hide')
                                    bootbox.alert("<h3> Servicio eliminado con exito!!</h3>")
                                }).error(function (data, status, headers, config) {
                        });
                               
                    }
        $scope.actualizar = function(){
                     cod =  $scope.cod
                      estado =  $scope.estado
                     var datos = [
                                        cod,
                                        estado,
                                    ]
                     $scope.persons = $http({
                                    url: '/arbifup/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':25,'datos': datos }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                    $(".modal").modal('hide')
                                    bootbox.alert("<h3> Servicio actualizado con exito!!</h3>")
                                }).error(function (data, status, headers, config) {
                        });
                               
                    }

}]);