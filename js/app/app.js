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
   

//subir imagenes!!!!


