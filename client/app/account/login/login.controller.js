'use strict';

angular.module('carglyplatformApp')
    .controller('LoginCtrl', function ($scope, Auth, $location, $window, toastr) {

        $scope.userObj = {};

        $scope.fnLogin = function (userObj) {
            Auth.login({
                email: userObj.email,
                password: userObj.password
            }).then(function (data) {
                // Logged in, redirect to home
                $location.path('/templates');
            }).catch(function (err){
                toastr.error(err.message);
            });
        };

        $scope.fnLoginOauth = function (provider) {
            $window.location.href = provider === 'google' ? '/api/auth/' + provider : '/auth/' + provider;
        };
    });
