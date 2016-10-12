'use strict';

angular.module('carglyplatformApp')
    .controller('AddUserDialogController', function ($scope, $mdDialog, User, userObj, toastr) {

        $scope.userObj = userObj ? angular.copy(userObj) : {role: 'user'};

        $scope.fnCloseDialog = function () {
            $mdDialog.cancel();
        };

        $scope.fnSaveUser = function (userObj) {
            if (userObj._id) {
                User.update(userObj, function (data) {
                    toastr.success('User updated successfully.');
                    $mdDialog.hide(data);
                }, function (err) {
                    angular.forEach(err.data.errors, function (error) {
                        toastr.error(error.message);
                    });
                    $mdDialog.hide();
                });
            } else {
                User.save(userObj, function (data) {
                    toastr.success('User added successfully.');
                    $mdDialog.hide(data);
                }, function (err) {
                    angular.forEach(err.data.errors, function (error) {
                        toastr.error(error.message);
                    });
                    $mdDialog.hide();
                });
            }
        };
    });
