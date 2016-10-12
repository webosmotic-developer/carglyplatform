'use strict';

angular.module('carglyplatformApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main.login', {
                url: '/login',
                templateUrl: 'app/account/login/login.html',
                controller: 'LoginCtrl',
                authenticate: false
            })
            .state('main.register', {
                url: '/register',
                templateUrl: 'app/account/register/register.html',
                controller: 'RegisterCtrl',
                authenticate: false
            })
            .state('main.settings', {
                url: '/settings',
                templateUrl: 'app/account/settings/settings.html',
                controller: 'SettingsCtrl',
                authenticate: true
            });
    });
