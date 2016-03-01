    var app = angular.module('app', [
    'ngRoute',
  
    ]);

    app.config(['$routeProvider', '$httpProvider', function($routeProvider , $httpProvider){
        $routeProvider
        .when('/',{
            templateUrl:'angular_pages/slider.html',
            controller:'sliderController',
        })
         .when('/slider',{
            templateUrl:'angular_pages/slider.html',
            controller:'sliderController',
        })
         .when('/nosotros_portada',{
            templateUrl:'angular_pages/nos_portada.html',
            controller:'nosPortadaController',
        })
        .when('/nosotros',{
            templateUrl:'angular_pages/nosotros.html',
            controller:'nosotrosController',
        })
        .when('/directiva',{
            templateUrl:'angular_pages/directiva.html',
            controller:'directivaController',
        })
        .when('/miembros',{
            templateUrl:'angular_pages/miembros.html',
            controller:'miembrosController',
        })
        .when('/noticias_portada',{
            templateUrl:'angular_pages/not_portada.html',
            controller:'notPortadaController',
        })
        .when('/noticias',{
            templateUrl:'angular_pages/noticias.html',
            controller:'noticiasController',
        })
        .when('/servicios_portada',{
            templateUrl:'angular_pages/serv_portada.html',
            controller:'servPortadaController',
        })
        .when('/ver_noticias',{
            templateUrl:'angular_pages/ver_noticias.html',
            controller:'verNoticiasController',
        })
        $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    }])
    app.controller('tabController', function(){
        this.selectTab = function(tab){
            this.tab = tab;
        };

    });

   app.controller('capsule',function($scope,$http,$location) {
        
         $scope.persons = $http({
            url: '../arbifup/administracion/ajax',
            method: "POST",
             dataType: 'jsonp',
            data: $.param({'case':1}),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).success(function (data, status, headers, config) {
                $scope.data = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    });
    app.controller('fooController',function($scope,$http,$route,$location) {

        var tab = 1;
        $scope.selectTab = function(tab){
            $scope.tab = tab;
        };

         $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':2}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
        
        $scope.foo = {};

       $scope.go = function(){ 
           var val = [
               $scope.foo.calle,
               $scope.foo.Comuna,
               $scope.foo.numero,
               $scope.foo.telefono,
               $scope.foo.celular,
               $scope.foo.email,
           ]
           $http({
                url: '/barry/administracion/ajax',
                method: "POST",
                data: $.param({'case':3,'foo': val }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
               $route.reload();
                
            }).error(function (data, status, headers, config) {
            });
        }
    })
	app.controller('desController', function($scope,$http,$location){

    $scope.persons = $http({
            url: '/barry/catalogo/ajax',
            method: "POST",
             dataType: 'jsonp',
            data: $.param({'case':7}),

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).success(function (data, status, headers, config) {
                $scope.dest = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
            $scope.traer = function(){
                $(document).on("click", ".prod", function(){
                        //$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");

                    var cod = $(this).data('cod')
                   
                    $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':3, 'datos': cod }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (data, status, headers, config) {
                    $scope.datos = data;
                 
                    }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });          
             })
            }
	 $(document).on("click", "#click", function(){
                        var ext = $("img", this).attr('src')
                        $('#externo').attr("src", ext);
			$('.externo').attr("href", ext);
                    })
       
   })
     app.controller('emailController', function($scope,$http,$route,$location){
	
	
        $scope.enviar = function(){
		
            var dat = [
            nombre = $scope.nombre,
            contacto = $scope.contacto,
            email = $scope.mail,
            mensaje = $scope.mensaje,
	    codigo = $('#cod').data("cod")
            ]

            //('entre:'+ dat['nombre'])
            $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':24,'datos': dat }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
               /* $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?*/
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });  

        }
        
    })
    app.controller('destacadoController',function($scope,$http,$route,$location) {


         $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':25}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
               // $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

            $scope.destacado = function(val){
                 $scope.persons = $http({
                    url: '/barry/administracion/ajax',
                    method: "POST",
                    data: $.param({'case':26}),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {

                    if(data[0]['cantidad'] < 4)
                        {
                                var codigo  =[
                                    val
                                ]
                             $scope.persons = $http({
                                url: '/barry/administracion/ajax',
                                method: "POST",
                                data: $.param({'case':27 , 'datos': codigo }),
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                    bootbox.alert("<h3>Se agrego el producto a destacados!!!</h3> ")
                                })
                        }else{
                            bootbox.alert("<h3> Lo siento ya tienes mas de la cantidad de productos destacados posibles!</h3>")
                        }
               // $scope.persons = data;// how do pass this to $scope.persons?
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });
            }
            $scope.eliminar = function(val)
            {
                var codigo  =[
                                    val
                                ]
                 $scope.persons = $http({
                                url: '/barry/administracion/ajax',
                                method: "POST",
                                data: $.param({'case':28 , 'datos': codigo }),
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                  bootbox.alert("<h3>Se elimino producto de destacados!!!</h3>")
                                })
            }
    })
    app.controller('expController',function($scope,$http,$route,$location) {

         $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':11}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });  
    })
    app.controller('sliController',function($scope,$http,$route,$location) {

         $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':12}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    })
    app.controller('ofreController',function($scope,$http,$route,$location) {
       $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':13}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
 
    })
    app.controller('nos2Controller',function($scope,$http,$route,$location) {

         $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':14}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    })
    app.controller('arriendoController',function($scope,$http,$route,$location) {

        $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':1}),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                    $scope.data = data;
                 
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });
             $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':6}),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                    $scope.cat = data;
                 
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });             
            $scope.opcion = function(){
                var ordenar = [
                    $scope.precio
                ]

                 $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':4 , 'datos': ordenar }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                    $scope.data = data;
                 
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });   
                ordenar = []       
                }
            $scope.buscar = function(){

                 $(document).on("click", ".producto", function(){
                        //$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");
                    var cod = $(this).data('cod')
                    $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':3, 'datos': cod }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (data, status, headers, config) {
                    $scope.datos = data;
                 
                    }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });          
             })

            }
            $(".btn_cotizar").click(function(){
                $(".cnt_cotizar").fadeIn("slow");
             });
            $(".enviar_cotizacion").click(function(){
                $(".cnt_cotizar").fadeOut("fast");
            });
            $(".cerrar_cotizar").click(function(){
                $(".cnt_cotizar").fadeOut("fast");
            });
	$(".click1").click(function(){
                 var ext = $("img", this).attr('src')
                 $('#externoarri').attr("src", ext);
                 $('.externo1').attr("href", ext);
             });
          
            
    })
    app.controller('ventaController',function($scope,$http,$route,$location) {

        $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':6}),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                    $scope.cat = data;
                 
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });             
        $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':2}),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                    $scope.data = data;
                 
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });          
            $scope.opcion = function(){
                var ordenar = [
                    $scope.precio
                ]
                 $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':5 , 'datos': ordenar }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                    $scope.data = data;
                 
                }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });   
                ordenar = []       
                }
            $scope.buscar = function(){

                 $(document).on("click", ".producto", function(){
                        //$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");
                    var cod = $(this).data('cod')
                    $scope.persons = $http({
                    url: '/barry/catalogo/ajax',
                    method: "POST",
                    data: $.param({'case':3, 'datos': cod }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (data, status, headers, config) {
                    $scope.datos = data;
                 
                    }).error(function (data, status, headers, config) {
                    $scope.status = status;
                });          
             })

            }
            $(".btn_cotizar").click(function(){
                $(".cnt_cotizar").fadeIn("slow");
             });
            $(".enviar_cotizacion").click(function(){
                $(".cnt_cotizar").fadeOut("fast");
            });
            $(".cerrar_cotizar").click(function(){
                $(".cnt_cotizar").fadeOut("fast");
            });
	 $(".click1").click(function(){
                 var ext = $("img", this).attr('src')
                 $('#externoventa').attr("src", ext);
		$('.externo1').attr("href", ext);
             });
          
            
    })
    app.controller('nos1Controller',function($scope,$http,$route,$location) {

         $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':15}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    })
  .controller('ofreceController', ['$scope', 'upload', '$http', function ($scope, upload , $http,  $location) 
    {
         var tab = 1;
        $scope.selectTab1 = function(tab){
            $scope.tab = tab;
        };
         var slidertab = 1;
        $scope.selectTab = function(tab){
            $scope.slidertab = slidertab;
        };         
            $scope.slider = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':10,'ofre': slidertab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.ofrece = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
            $scope.selectTab = function(slidertab){
            $scope.slidertab = slidertab;
            $scope.slider = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':10,'ofre': $scope.slidertab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.ofrece = data;
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
            case 4:
            var titulo = $scope.titulo4;
            var desc = $scope.descripcion4;
            break;
        }     
        upload.uploadFile(file, titulo , desc , tab).then(function(res)
        {
            console.log(res);
            bootbox.alert('<h3> Imagen de Barry ofrece ingresada con exito!!</h3>')
        })
    }
}])
    .directive('uploaderModel', ["$parse", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) 
        {
            iElement.on("change", function(e)
            {
                $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
            });
        }
    };
}])

.service('upload', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , desc ,tab)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("name", titulo);
        formData.append("tab", tab);
        formData.append("desc", desc);
        formData.append("file", file);

        return $http.post("/barry/administracion/ofrece", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }   
}])
.controller('sliderController', ['$scope', 'uploads', '$http', function ($scope, upload , $http,  $location) 
    {
         var tab = 1;
        $scope.selectTab1 = function(tab){
            $scope.tab = tab;
        };
            var tab = 1;
            $scope.slider = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':4,'sli': tab }),
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
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':4,'sli': $scope.slidertab }),
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
            var link = $scope.link;
            break;
            case 2:
            var titulo = $scope.titulo2;
            var desc = $scope.descripcion2;
            var link = $scope.link2;
            break;
            case 3:
            var titulo = $scope.titulo3;
            var desc = $scope.descripcion3;
            var link = $scope.link3;
            break;
            case 4:
            var titulo = $scope.titulo4;
            var desc = $scope.descripcion4;
            var link = $scope.link4;
            break;
        } 

        upload.uploadFile(file, titulo , desc , link ,tab).then(function(res)
        {
            console.log(res);
        })
    }
}])
    .directive('uploaderModel', ["$parse", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) 
        {
            iElement.on("change", function(e)
            {
                $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
            });
        }
    };
}])

.service('uploads', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , desc , link ,tab)
    {

        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("name", titulo);
        formData.append("tab", tab);
        formData.append("desc", desc);
        formData.append("link", link);
        formData.append("file", file);

        return $http.post("/barry/administracion/slider", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            bootbox.alert('<h3> Imagen de Slider ingresada con exito!!</h3>')
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }   
}])
//nosotros
.controller('experienciaController', ['$scope', 'uploade', '$http', function ($scope, upload , $http,$location) 
    {
            $scope.selectTab1 = function(tab){
            $scope.tab = tab;
        };
            var tab = 1;
            $scope.experiencia = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':6,'exp': tab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.experiencia = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

            $scope.selectTab = function(slidertab){
            $scope.slidertab = slidertab;
            $scope.experiencia = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':6,'exp': $scope.slidertab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.experiencia = data;
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
            var link = $scope.link;
            var desc = $scope.descripcion;
            break;
            case 2:
            var titulo = $scope.titulo2;
            var link = $scope.link2;
            var desc = $scope.descripcion2;
            break;
            case 3:
            var titulo = $scope.titulo3;
            var link = $scope.link3;
            var desc = $scope.descripcion3;
            break;
            case 4:
            var titulo = $scope.titulo4;
            var link = $scope.link4;
            var desc = $scope.descripcion4;
            break;
        }
        
        upload.uploadFile(file, titulo , link,  desc , tab).then(function(res)
        {
            bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
            console.log(res);
        })
    }
}])
    .directive('uploaderModel', ["$parse", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) 
        {
            iElement.on("change", function(e)
            {
                $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
            });
        }
    };
}])
.service('uploade', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo ,link , desc ,tab)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("name", titulo);
        formData.append("link", link);
        formData.append("tab", tab);
        formData.append("desc", desc);
        formData.append("file", file);

        return $http.post("/barry/administracion/experiencia", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }   
}])
.controller('confiadoController', ['$scope', 'uploadc', '$http', function ($scope, upload , $http,$location) 
    {
            var tab = 1;
            
            $scope.confiado = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':7,'con': tab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.confiado = data;
               // $scope.slider = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

            $scope.selectTab = function(slidertab){
            $scope.slidertab = slidertab;
            $scope.confiado = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':7,'con': $scope.slidertab }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.confiado = data;
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
            var link = $scope.link1;
            var nombre = $scope.nombre1;
            break;
            case 2:
            var link = $scope.link2;
            var nombre = $scope.nombre2;
            break;
            case 3:
            var link = $scope.link3;
            var nombre = $scope.nombre3;
            break;
            case 4:
            var link = $scope.link4;
            var nombre = $scope.nombre4;
            break;
            case 5:
            var link = $scope.link5;
            var nombre = $scope.nombre5;
            break;
            case 6:
            var link = $scope.link6;
            var nombre = $scope.nombre6;
            break;
            case 7:
            var link = $scope.link7;
            var nombre = $scope.nombre7;
            break;
            case 8:
            var link = $scope.link8;
            var nombre = $scope.nombre8;
            break;
        }
        
        upload.uploadFile(file, link , nombre , tab).then(function(res)
        {
            console.log(res);
            bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
        })
    }
}])
    .directive('uploaderModel', ["$parse", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) 
        {
            iElement.on("change", function(e)
            {
                $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
            });
        }
    };
}])
.service('uploadc', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, link, nombre ,tab)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("link", link);
        formData.append("nombre", nombre);
        formData.append("tab", tab);
        formData.append("file", file);

        return $http.post("/barry/administracion/confiado", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }   
}])
.controller('crearproductosController', ['$scope', 'uploadcre', '$http', function($scope, upload, $http,$route,$location) {

   var valor = 0 
   var codigoProducto = 0
    $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':17}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
     $scope.crear = function(){
            
            var val = [
               $scope.titulo,
               $scope.txt1,
               $scope.txt2,
               $scope.enlace,
               $scope.precio,
               $scope.categoria,
               $scope.estado,
           ]
           $scope.persons = $http({
                url: '/barry/administracion/ajax',
                method: "POST",
                data: $.param({'case':18,'producto': val }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data, status, headers, config) {
              // $route.reload();
               codigoProducto = data
               bootbox.confirm("<h3>Atención</h3> Ha creado un producto con exito, Favor de ingresar las imagenes",function(confirm){
                    if(confirm)
                    {
                               var slidertab = 0
                               var tab2 = 0
                               $scope.slidertab = slidertab;
                               var valor = 
                               [
                                    codigoProducto,
                               ]

                              $scope.persons = $http({
                                    url: '/barry/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':19,'datos': valor }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                  // $route.reload();
                                  codImagen = (data[0]['imagenes'])

                                    
                                }).error(function (data, status, headers, config) {
                                });
                              
                                $scope.tab2 = 1;

                                 var dat = [
                                        slidertab,
                                        codImagen,
                                    ]
                                 //traer imagenes
                                $scope.persons = $http({
                                    url: '/barry/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':20,'datos': dat }),
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
        var codImagen = 0
         $scope.selectTab1 = function(slidertab){
           
         $scope.slidertab = slidertab;
               var valor = 
               [
                    codigoProducto,
               ]
              
              $scope.persons = $http({
                    url: '/barry/administracion/ajax',
                    method: "POST",
                    data: $.param({'case':19,'datos': valor }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                  // $route.reload();
                  codImagen = (data[0]['imagenes'])
                    
                }).error(function (data, status, headers, config) {
                });
                var dat = [
                    slidertab,
                    codImagen,
                ]
                //traer imagenes
                $scope.persons = $http({
                    url: '/barry/administracion/ajax',
                    method: "POST",
                    data: $.param({'case':20,'datos': dat }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                  // $route.reload();
                  $scope.img = data
                    
                }).error(function (data, status, headers, config) {
                });
        }
        //fin codigo controlador
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
      }])
.directive('uploaderModel', ["$parse", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) 
        {
            iElement.on("change", function(e)
            {
                $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
            });
        }
    };
}])
.service('uploadcre', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, tab ,img)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("img", img);
        formData.append("tab", tab);
        formData.append("file", file);

        return $http.post("/barry/administracion/crearproducto", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }   
}])

.controller('verCatalogoController', ['$scope', 'uploadcre', '$http', function($scope, upload, $http,$route,$location) {

   var valor = 0 
   var codigoProducto = 0
    var codImagen = 0
    //traer categorias *******
    $scope.persons = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':17}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.data = data;
                $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });
    //traer productos *******
    
    $scope.tabs = 0
    $scope.alerta = function(){
       
    }
    var slidertab = 1;
    
     $scope.go = function(){
            var val = [
               $scope.nombre,
               $scope.categoria,
               $scope.estado,
           ]
           $scope.persons = $http({
                url: '/barry/administracion/ajax',
                method: "POST",
                data: $.param({'case':21,'datos': val }),
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

                           $scope.prueba = "<div id='hola"+i+"' class='test "+clase+"' data-cod="+data[i].id+" data-img="+data[i].imagenes+" data-nombre='"+data[i].nombre+"' data-txt1='"+data[i].descripcion1+"' "+
                                            "data-txt2='"+data[i].descripcion2+"' data-enlace='"+data[i].enlace+"'  data-precio='"+data[i].precio+"' "+
                                            " data-estado='"+data[i].estado+"' data-categoria='"+data[i].cat+"' "+
                                           // "style='background-color:"+color+";' "+
                                            "data-toggle='modal' data-target='#producto'>Producto: "+data[i].nombre+ " <br>Categoria: "+data[i].cat+ " <br>Estado: "+data[i].estado+ "<br>Codigo producto: "+data[i].id+ "</div>"
                            var prueba = $scope.prueba
                            $("#hola").append(prueba)

                        };

                        $("#hola").on("click", ".test", function(){
                        //$(this).after("<p class=\"blog-test\">Pulsa para probar " + (++bt_count) + "</p>");
                        var codImagen = $(this).data('img')
                        var cod = $(this).data('cod')
                        var titulo =  $(this).data('nombre')
                        $scope.selectTab1 = function(slidertab){

                        $scope.slidertab = slidertab;
                         var dat = [
                                        slidertab,
                                        codImagen,
                                    ]
                        $scope.persons = $http({
                                    url: '/barry/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':20,'datos': dat }),
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
                                    url: '/barry/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':20,'datos': dat }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                  // $route.reload();
                                  $scope.img = data
                                    
                                }).error(function (data, status, headers, config) {
                        });

                        $('#nombre').val($(this).data('nombre'))
                        $('#txt1').val($(this).data('txt1'))
                        $('#txt2').val($(this).data('txt2'))
                        $('#enlace').val($(this).data('enlace'))
                        $('#precio').val($(this).data('precio'))
                        $('#estado').val($(this).data('estado'))
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
                                    url: '/barry/administracion/ajax',
                                    method: "POST",
                                    data: $.param({'case':22,'datos': datos }),
                                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                                }).success(function (data, status, headers, config) {
                                    $(".modal").modal('hide')
                                    bootbox.alert("<h3> Producto eliminado con exito!!</h3>")
                                }).error(function (data, status, headers, config) {
                        });
                               
                    }
                    $scope.actualizar = function(){
                        categoria = $scope.categoria
                        titulo = $('#nombre').val()
                        txt1 = $('#txt1').val()
                        txt2 = $('#txt2').val()
                        enlace = $('#enlace').val()
                        precio = $('#precio').val()
                       // categoria = $('#categoria').val()
                        estado = $('#estado').val()
                       
                          var val = [
                           cod,
                           titulo,
                           txt1,
                           txt2,
                           enlace,
                           precio,
                           categoria,
                           estado,
                           codImagen,
                        ]
                         $scope.persons = $http({
                            url: '/barry/administracion/ajax',
                            method: "POST",
                            data: $.param({'case':23, 'datos': val }),
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
           
            

        
      }])
.directive('uploaderModel', ["$parse", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) 
        {
            iElement.on("change", function(e)
            {
                $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
            });
        }
    };
}])
.service('uploadver', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, tab ,img)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("img", img);
        formData.append("tab", tab);
        formData.append("file", file);

        return $http.post("/barry/administracion/crearproducto", formData, {
            headers: {
                "Content-type": undefined
            },
            transformRequest: angular.identity
        })
        .success(function(res)
        {
            deferred.resolve(res);
        })
        .error(function(msg, code)
        {
            deferred.reject(msg);
        })
        return deferred.promise;
    }   
}])
.controller('contactosController', function($scope,$http,$route,$location) {

       
         $scope.contactos = $http({
            url: '/barry/administracion/ajax',
            method: "POST",
            data: $.param({'case':8}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
                $scope.contactos = data;
              //  $scope.persons = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

    $scope.go = function(){ 
           var valor = $scope.email
         
          $scope.cont = $http({

                url: '/barry/administracion/ajax',
                method: "POST",
                data: $.param({'case':9,'contacto': valor }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
              $scope.contactos = data;
              bootbox.alert('<h3> Datos ingresados con exito!!</h3>')
                
            }).error(function (data, status, headers, config) {
            });
        }
    })
.controller('categoriaController', function($scope,$http,$route,$location) {

       
    $scope.go = function(){ 
           var valor = $scope.categoria
         
          $scope.cont = $http({
                url: '/barry/administracion/ajax',
                method: "POST",
                data: $.param({'case':16,'categoria': valor }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
              $scope.contactos = data;
              bootbox.alert('<h3> Categoria ingresada con exito!!</h3>')

                
            }).error(function (data, status, headers, config) {
            });
        }
    })
function ale(){
    return "hola mundo"
}

//subir imagenes!!!!


