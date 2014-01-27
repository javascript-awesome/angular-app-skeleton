(function (angular) {
    'use strict';

    angular
        .module('myApp.home', [])
        .config(Config);

    Config.$inject = ['$stateProvider'];
    function Config(   $stateProvider) {

        $stateProvider.state('home', {
            url: '/home',
            controller: 'HomeCtrl',
            templateUrl: 'app/home/home.tpl.html'
        });

    }

}(window.angular));
