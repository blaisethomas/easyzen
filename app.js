var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate', 'firebase']);

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
        var self = this;
        self.todoList = [
            {task: "happy", done: false},
            {task: "to be here", done: false},
            {task: "with you guys! ", done: false} ];
        self.text; //bound to input box for new todo
        self.addTodo = addTodo;
        self.deleteTodo = deleteTodo;
        function addTodo(){
            // var newTodo = {task: self.text, done: false};
            // self.todoList.push(newTodo);
            self.todoList.push({task: self.text, done: false});
            self.text = null;
        }
        function todone($index){
            console.log(self.todoList);
            //self.todoList.push({done: true});
        }
        function deleteTodo($index){
            self.todoList.splice($index, 1);
        }
});

animateApp.controller('breathController', function($scope) {
    $scope.pageClass = 'page-breath';
});