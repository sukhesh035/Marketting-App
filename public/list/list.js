var app = angular.module("list_consultants", []);
app.controller("list_controller", ["$scope", "$http", "$state", "$location", function ($scope, $http, $state, $location) {

    $scope.isLoad = true;



    $http.get('/getStudentList').then(function (response) {
        console.log(response);
        $scope.result = response.data.filter(Boolean);
        console.log($scope.result);
        $scope.isLoad = false;
    });

    $scope.deleteStudent = function (id, index) {
        var infoMsg = confirm("Do you want to delete the Student");
        if (infoMsg == true) {
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
    //    $scope.studentDetails =function(id){
    //        $location.path("/studentDetails/" + id);
    //    };
    $scope.client_details = function (id) {
        $location.path("/client_details/" + id);
    };
}]);
