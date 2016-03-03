var app = angular.module('app2', [
    'ngRoute',
  
    ]);

    app.config(['$routeProvider', '$httpProvider', function($routeProvider , $httpProvider){
        $routeProvider
        .when('/',{
            templateUrl:'angular_pages/home.html',
            
        })
        .when('/quienes_somos',{
            templateUrl:'angular_pages/quienes_somos.html',
            controller:'sliderController',
        })
  }])