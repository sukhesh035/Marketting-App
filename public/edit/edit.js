var app = angular.module("edit_module",[]);
app.controller("edit_controller",["$scope",function($scope){
    $scope.editStudent = function (id) {
        $http.post('/editStudent/'+id).then(function(response){
            
        });
    }
}]);