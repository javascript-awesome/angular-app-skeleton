(function (angular) {
    'use strict';

    angular
        .module('myApp')
        .service('appService', AppService);

    AppService.$inject = ['$state', '$stateParams'];
    function AppService(   $state,   $stateParams) {

        var app = this;

        app.state = $state;
        app.stateParams = $stateParams;

    }


}(window.angular));
