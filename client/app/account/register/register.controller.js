'use strict';

angular.module('carglyplatformApp')
    .controller('RegisterCtrl', function ($scope, Auth, $location, $window, toastr) {

        $scope.userObj = {};

        $scope.fnRegister = function (userObj) {

            Auth.createUser({
                name: userObj.name,
                email: userObj.email,
                password: userObj.password
            }).then(function () {
                // Account created, redirect to home
                $location.path('/templates');
            }).catch(function (err) {
                angular.forEach(err.data.errors, function (error) {
                    toastr.error(error.message);
                });
            });
        };

        $scope.fnLoginOauth = function (provider) {
            $window.location.href = provider === 'google' ? '/api/auth/' + provider : '/auth/' + provider;
        };
    });
