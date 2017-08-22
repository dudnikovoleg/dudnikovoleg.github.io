'use strict';

var kindergartenApp = angular.module('kindergartenApp', ['ui.router']);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['kindergartenApp']);
});




/*  Ui router
------------------------------------*/


kindergartenApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider)  {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html'
        })
        .state('set_data_child', {
            url: '/set_data_child',
            templateUrl: '/views/set_data_child.html'
        })
        .state('child_table', {
            url: '/child_table',
            templateUrl: '/views/child_table.html'
        })



}]);

