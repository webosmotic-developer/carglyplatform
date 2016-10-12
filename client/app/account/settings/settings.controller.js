'use strict';

angular.module('carglyplatformApp')
    .controller('SettingsCtrl', function ($scope, $mdDialog , User, Auth, toastr) {

        $scope.isAdmin = Auth.isAdmin();
        $scope.userObj = Auth.getCurrentUser();

        $scope.fnOpenAddUserDialog = function (ev, userObj) {
            $mdDialog.show({
                controller: 'AddUserDialogController',
                templateUrl: 'app/account/settings/dialog/addUser/addUser.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                resolve: {
                    userObj: function () {
                        return userObj;
                    }
                }
            }).then(function () {
                $scope.users = User.query();
            });
        };

        $scope.fnUpdateProfile = function (userObj) {
            if(userObj._id){
                User.update(userObj, function (data) {
                    toastr.success('Profile updated successfully.');
                    $mdDialog.hide(data);
                }, function (err) {
                    angular.forEach(err.data.errors, function (error) {
                        toastr.error(error.message);
                    });
                    $mdDialog.hide();
                });
            }
        };

        $scope.fnChangePassword = function (userObj) {
            Auth.changePassword(userObj.oldPassword, userObj.newPassword)
                .then(function () {
                    toastr.success('Password successfully changed.');
                }).catch(function () {
                    toastr.error('Incorrect password');
                });
        };

        $scope.fnDeleteUser = function (ev, id) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this user?')
                .ariaLabel('DELETE')
                .targetEvent(ev)
                .ok('DELETE')
                .cancel('CANCEL');
            $mdDialog.show(confirm).then(function() {
                User.remove({id: id}, function () {
                    toastr.success('User successfully deleted.');
                    $scope.users = User.query();
                }, function(error){
                    toastr.error(error.message);
                });
            });
        };

        $scope.fnInitSettings = function(){
            if($scope.isAdmin){
                $scope.users = User.query();
            }
        };
    });
