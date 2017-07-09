var app = angular.module("routes_module", ['ui.router']);
app.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
    });

    $stateProvider.state('addstudents1', {
        url: '/addstudents1',
        templateUrl: 'addstudents/addstudents1.html'
    });
    $stateProvider.state('list', {
        url: '/list',
        templateUrl: 'list/list.html'
    });
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.html'
    });

    $stateProvider.state('editStudent', {
        url: '/editStudent/:id',
        templateUrl: 'addstudents/addstudents1.html'
    });
    $stateProvider.state('studentDetails', {
        url: '/studentDetails/:id',
        templateUrl: 'addstudents/studentDetails.html'
    });
    $stateProvider.state('client_details', {
        url: '/client_details/:id',
        templateUrl: 'client_details/client_details.html'
    });
    $stateProvider.state('interview_details', {
        url: '/interview_details/:id',
        templateUrl: 'client_details/interview_details.html'
    });
});
