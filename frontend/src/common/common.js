(function (angular) {
    'use strict';

    angular
        .module('myApp.common', [
            'myApp.common.services',
            'myApp.common.directives'
        ])
        .config(Config);

    Config.$inject = [];
    function Config() {

    }

}(window.angular));
