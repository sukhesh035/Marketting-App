var app = angular.module("service_module",[]);

app.service('shared_service',function($http){
    this.getDetails = function(id){
       return $http.get('/getStudentDetails/' +id);
    };
});