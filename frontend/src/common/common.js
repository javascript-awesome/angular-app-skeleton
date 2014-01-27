(function (angular) {
    'use strict';

    angular
        .module('my-app.common', [
            'my-app.common.app-version'
        ])
        .config(Config);

    Config.$inject = [];
    function Config() {

    }

}(window.angular));
