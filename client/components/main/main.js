'use strict';

angular.module('carglyplatformApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                templateUrl: 'components/main/main.html',
                controller: 'MainCtrl',
                abstract: true
            });
    });
