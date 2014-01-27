(function (angular) {
    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'ui.bootstrap',
            'myApp.common',
            'myApp.home'
        ])
        .config(Config)
        .run(Run);

    Config.$inject = ['$urlRouterProvider', '$locationProvider'];
    function Config(   $urlRouterProvider,   $locationProvider) {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/home');
    }

    Run.$inject = ['$rootScope', 'appService'];
    function Run(   $rootScope,   appService) {
        $rootScope.app = appService;
    }

}(window.angular));

