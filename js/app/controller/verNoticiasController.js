app.controller('verNoticiasController', ['$scope','noticias', '$http', function ($scope, upload ,$http)
 {

   var valor = 0 
   var codigoProducto = 0
    var codImagen = 0
    //traer categorias *******
    $scope.persons = $http({
            url: '/arbifup/administracion/ajax',
            method: "POST",
            data: $.param({'case':9}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    //traer productos *******
    
    $scope.tabs = 0

    var slidertab = 1;
    
     $scope.go = function(){
            var val = [
               $scope.nombre,
               $scope.categoria,
           ]
           $scope.persons = $http({
                url: '/arbifup/administracion/ajax',
                method: "POST",
                data: $.param({'case':14,'datos': val }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data, status, headers, config) {
              // $route.reload();
              var tabs = 1
              var color = "red";
               /*bootbox.confirm("<h3>Atención</h3> Ha creado un producto con exito, Favor de ingresar las imagenes",function(confirm){
                    if(confirm){}        
                })*/
                //$scope.catalogo = data;
                        for (var i = 0; i < data.length; i++) {
                            if(i%2){
                                 clase = "destacado_gral_2";
                            }else{
                                 clase = "destacado_gral";
                            }

                           $scope.prueba = "<div id='hola"+i+"' class='test "+clase+"' data-cod="+data[i].id+" data-img="+data[i].imagen+" data-titulo='"+data[i].titulo+"' data-desc='"+data[i].descripcion+"' "+
                                            "data-enlace='"+data[i].link+"' data-categoria='"+data[i].cat+"' "+
                                           // "style='background-color:"+color+";' "+
                                            "data-toggle='modal' data-target='#producto'>Titulo: "+data[i].titulo+ " <br>Categoria: "+data[i].cat+ "<br>Codigo Noticia: "+data[i].id+ "</div>"
                            var prueba = $scope.prueba
                            $("#hola").append(prueba)

                        };

                        $("#hola").on("click", ".test", function(){
                        //$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");
                        var codImagen = $(this).data('img')
                        var cod = $(this).data('cod')
                        var titulo =  $(this).data('titulo')

                        $scope.selectTab1 = function(slidertab){
                        $scope.slidertab = slidertab;
                         var dat = [
                                        slidertab,
                                        codImagen,
                                    ]
                        $scope.persons = $http({
                                    url: '/arbifup/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':15,'datos': dat }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                  // $route.reload();
                                  $scope.img = data
                                    
                                }).error(function (data, status, headers, config) {
                                });
                        }
                        $scope.slidertab = slidertab;
                             var dat = [
                                        slidertab,
                                        codImagen,
                                    ]
                                 //traer imagenes
                                $scope.persons = $http({
                                    url: '/arbifup/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':15,'datos': dat }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                  // $route.reload();
                                  $scope.img = data
                                    
                                }).error(function (data, status, headers, config) {
                        });

                        $('#titulo').val($(this).data('titulo'))
                        $('#desc').val($(this).data('desc'))
                        $('#enlace').val($(this).data('enlace'))
                        $('#categoria').val($(this).data('categoria'))


                    $scope.uploadFile = function()
                    {
                        var tab = $scope.slidertab;
                        var file = $scope.file;
                        var img = codImagen;

                        upload.uploadFile(file, tab, img).then(function(res)
                        {
                            console.log(res);
                            bootbox.alert('<h3> Imagen agregada con exito con exito!!</h3>')
                        })
                    }
                    $scope.eliminar = function(){
                     var datos = [
                                        cod,
                                        codImagen,
                                    ]
                     $scope.persons = $http({
                                    url: '/arbifup/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':16,'datos': datos }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                    $(".modal").modal('hide')
                                    bootbox.alert("<h3> Producto eliminado con exito!!</h3>")
                                }).error(function (data, status, headers, config) {
                        });
                               
                    }
                    $scope.actualizar = function(){
                        categoria = $scope.categoria
                        titulo = $('#titulo').val()
                        desc = $('#desc').val()
                        enlace = $('#enlace').val()
                       
                          var val = [
                           cod,
                           titulo,
                           desc,
                           enlace,
                           categoria,
                           codImagen,
                        ]
                         $scope.persons = $http({
                            url: '/arbifup/administracion/ajax',
                            method: "POST",
                            data: $.param({'case':17, 'datos': val }),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        }).success(function (data, status, headers, config) {
                           bootbox.alert("Producto actualizado con exito!!!")
                        })
                
                    }
             });

                }).error(function (data, status, headers, config) {
                })
                $scope.tabs = 1

            }

      }]);