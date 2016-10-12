'use strict';

angular.module('carglyplatformApp')
    .controller('MainCtrl', function ($mdSidenav, $mdDialog, $scope, $location, Auth, User, socket) {

        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.getCurrentUser = Auth.getCurrentUser;
        $scope.reminderArr = [];

        $scope.fnLogout = function () {
            Auth.logout();
            $scope.reminderArr = [];
            $location.path('/login');
        };

        $scope.fnToggleLeft = function () {
            $mdSidenav('left').toggle();
        };

        var originatorEv;
        $scope.fnOpenMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

    });
