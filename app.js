var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	.when('/feelings', {
    		templateUrl: 'page-feelings.html',
            controller: 'feelingsController'
    	})
    	.when('/breath', {
    		templateUrl: 'page-breath.html',
            controller: 'breathController'
    	});

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('feelingsController', function($scope) {
    $scope.pageClass = 'page-feelings';

});

animateApp.controller('breathController', function($scope) {
    $scope.pageClass = 'page-breath';
});