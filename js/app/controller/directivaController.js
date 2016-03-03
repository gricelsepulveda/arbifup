app.controller('directivaController', ['$scope','$http', function ($scope,$http){

	  var tab = 3;
        $scope.selectTab = function(tab){
        $scope.tab = tab;
        };

          $scope.directiva = $http({
            url: '../arbifup/administracion/ajax',
            method: "POST",
             dataType: 'jsonp',
            data: $.param({'case':4}),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).success(function (data, status, headers, config) {
                $scope.data = data;// how do pass this to $scope.persons?
            }).error(function (data, status, headers, config) {
                $scope.status = status;
            });

     $scope.directiva = function(){
     	alert('entre')
     	var val = [
               $scope.titulo,
               $scope.txt1,
           ]
           $http({
                url: '/arbifup/administracion/ajax',
                method: "POST",
                data: $.param({'case':5,'directiva': val }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
            	//console.log(data)
                bootbox.alert('<h3> Datos cambiados con exito!!</h3>')
            }).error(function (data, status, headers, config) {
            });
     }
	
}])