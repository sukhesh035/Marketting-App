var app = angular.module("addStudents_module", []);
app.controller("addStudents_controller", ["$scope", "$http", "$state", "$location", "shared_service", function ($scope, $http, $state, $location, shared_service) {
    $scope.studentInfo = {};
    $scope.studentInfo.clients = [];
    $scope.obj = {};
    $scope.add = function () {
        console.log($scope.studentInfo.clients);
        (function () {
            $location.path("/interview_details/"+$state.params.id);
        })();
    }

    $scope.getInfo = function () {
        console.log($scope.studentInfo.clients);
        $http.post('/addstudent', $scope.studentInfo).then(function (response) {
            console.log(response);
            $scope.studentInfo = {};
        });


    };


    $scope.getDetails = function (id) {
        console.log("tanuj");
        $scope.display_details = $scope.studentInfo.clients.push($scope.obj);
        console.log($scope.studentInfo.clients);
        $http.post('/addDetails/' + $state.params.id, $scope.obj).then(function (response) {
            console.log(response);
            $scope.obj = {};
        });


    };



    console.log("$state.params" + $state.params);

    if ($state.current.name == "editStudent") {
        shared_service.getDetails($state.params.id).then(function (response) {
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
        shared_service.getDetails($state.params.id).then(function (response) {
                console.log(response);
                $scope.clients = response.data[0].clients;
                console.log($scope.clients);
            }

        );
    }

}]);
