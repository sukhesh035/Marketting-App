var app = angular.module("market", ['ui.router']);
app.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home.html'
    });
    
    $stateProvider.state('addstudents1', {
        url: '/addstudents1',
        templateUrl: 'addstudents1.html'
    });
    
});