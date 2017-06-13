var app = angular.module("addStudents_module", []);
app.controller("addStudents_controller", ["$scope", "$http", "$state", "$location", function ($scope, $http, $state, $location) {
    $scope.studentInfo = {};
    $scope.studentInfo.client_name = [];
    $scope.obj = {};
    $scope.studentInfo.add = function () {
        console.log("entered");
        $scope.display_details = $scope.studentInfo.client_name.push($scope.obj);
        console.log($scope.studentInfo.client_name);
        (function () {
            $location.path("/interview_details/");
        })();
    }

    $scope.getInfo = function () {
        console.log($scope.studentInfo);
        $scope.display_details = $scope.studentInfo.client_name.push($scope.obj);
        console.log($scope.studentInfo.client_name);
        $http.post('/addstudent', $scope.studentInfo).then(function (response) {
            console.log(response);
            $scope.studentInfo = {};
        });


    };

    console.log("$state.params" + $state.params);

    if ($state.current.name == "editStudent") {
        $http.get("/getStudentDetails/" + $state.params.id).then(function (response) {
            console.log(response);
            $scope.studentInfo = response.data[0];
        });
    }
    if ($state.current.name == "interview_details") {
        $http.post("/interview_details/", $scope.display_details).then(function (response) {
            console.log(response);
        });
    }
    //    if($state.current.name == "studentDetails"){
    //        $http.get("/getStudentDetails/"+$state.params.id).then(function(response){
    //            console.log(response);
    //            $scope.studentInfo = response.data[0];
    //            //            console.log($scope.studentInfo.client_count.length);
    //
    //        });
    //    }
    if ($state.current.name == "client_details") {
        $http.get("/getClient/" + $state.params.id).then(function (response) {
                console.log(response);
            }

        );
    }
}]);
