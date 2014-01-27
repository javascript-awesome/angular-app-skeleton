(function (angular) {
    'use strict';

    angular
        .module('my-app.home', [])
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
