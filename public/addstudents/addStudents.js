var app = angular.module("addStudents_module", []);
app.controller("addStudents_controller", ["$scope", "$http", "$state", function ($scope, $http, $state) {
    $scope.studentInfo = {};
    $scope.studentInfo.client_name = [];
    $scope.obj = {};
    $scope.studentInfo.add = function () {
//        $scope.myVar = false;
        console.log("entered");
        $scope.display_details = $scope.studentInfo.client_name.push($scope.obj);
        console.log($scope.studentInfo.client_name);
        $scope.myVar = true;
    }

    $scope.getInfo = function () {
        console.log($scope.studentInfo);
        console.log($scope.studentInfo.client_name);
        $http.post('/addstudent', $scope.studentInfo).then(function (response) {
            console.log(response);
            $scope.studentInfo = {};
            //console.log($scope.studentInfo.client_name);
        });


    };

    console.log("$state.params" + $state.params);

    if ($state.current.name == "editStudent") {
        $http.get("/getStudentDetails/" + $state.params.id).then(function (response) {
            console.log(response);
            $scope.studentInfo = response.data[0];
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
