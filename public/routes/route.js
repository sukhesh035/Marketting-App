var app = angular.module("routes_module", ['ui.router']);
app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
    });
    
    $stateProvider.state('addstudents1', {
        url: '/addstudents1',
        templateUrl: 'addstudents/addstudents1.html'
    });
    
});