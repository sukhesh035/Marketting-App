var app = angular.module("list_consultants", []);
app.controller("list_controller", ["$scope", "$http", function ($scope, $http) {
    $http.get('data/mockData.json').then(function (data) {
        $scope.mockList = data.data.data;
        console.log($scope.mockList);
//$scope.name = "sai";
//        $scope.arr = $scope.mockList.data;
//        console.log($scope.arr);
    });
    
    
}]);
