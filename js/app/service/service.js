app.service('nos_portada', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , txt1)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("txt1", txt1);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/nosotros_portada", formData, {
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
}]);
app.service('nosotros', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , txt1)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("txt1", txt1);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/nosotros", formData, {
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
}]);
app.service('miembros', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , desc, tab)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("name", titulo);
        formData.append("desc", desc);
        formData.append("tab", tab);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/miembros", formData, {
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
}]);
app.service('slider', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , desc, tab)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("name", titulo);
        formData.append("desc", desc);
        formData.append("tab", tab);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/slider", formData, {
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
}]);
app.service('not_portada', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , txt1)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("txt1", txt1);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/noticias_portada", formData, {
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
}]);
app.service('noticias', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, tab ,img)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("img", img);
        formData.append("tab", tab);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/crearNoticia", formData, {
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
}]);
app.service('serv_portada', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , txt1)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("txt1", txt1);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/servicio_portada", formData, {
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
}]);
app.service('med_portada', ["$http", "$q", function ($http, $q) 
{
    this.uploadFile = function(file, titulo , txt1)
    {
        var deferred = $q.defer();
        var formData = new FormData();
        formData.append("titulo", titulo);
        formData.append("txt1", txt1);
        formData.append("file", file);

        return $http.post("/arbifup/administracion/media_portada", formData, {
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
}]);







