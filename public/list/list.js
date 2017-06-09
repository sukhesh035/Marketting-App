var app = angular.module("list_consultants", []);
app.controller("list_controller", ["$scope", "$http", "$state", "$location", function ($scope, $http, $state, $location) {
       $http.get('/getStudentList').then(function (response) {
        console.log(response);
        $scope.result = response.data;
        console.log($scope.result);
    });

    $scope.deleteStudent = function (id, index) {
        var r = confirm("Do you want to delete the Student");
        if (r == true) {
            $http.put('/deleteStudent/' + id).then(function (response) {
                if (response.data == "User deleted succesfully") {
                    alert("Student Deleted Successfully");
                    $scope.result.splice(index, 1);
                }
            });
        }
    };

    $scope.editStudent = function (id) {
        $location.path("/editStudent/" + id);
    };

}]);
