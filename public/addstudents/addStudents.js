var app = angular.module("addStudents_module", []);
app.controller("addStudents_controller", ["$scope","$http", function ($scope,$http) {
    $scope.studentInfo = {};
    
    $scope.getInfo = function () {
        $http.post('/addstudent', $scope.studentInfo).then(function (response) {
            console.log(response);
            $scope.studentInfo ={};
        });
        
    }
}]);
