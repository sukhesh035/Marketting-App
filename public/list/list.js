var app = angular.module("list_consultants", []);
app.controller("list_controller", ["$scope", "$http", function ($scope, $http) {
    $http.get('data/mockData.json').then(function (data) {
        $scope.mockList = data.data.data;
        console.log($scope.mockList);

    });
$http.get('getStudentList').then(function(response){
    $scope.result = response.data;
    console.log($scope.result);
})

}]);
