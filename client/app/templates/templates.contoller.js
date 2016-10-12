'use strict';

angular.module('carglyplatformApp')
    .controller('TemplatesCtrl', function ($scope, $mdDialog, toastr, TemplatesService) {

                $scope.fnGetTemplates = function () {
            TemplatesService.list()
                .then(function (res) {
                    $scope.templates = res;
                });
        };

        $scope.fnDeleteTemplates = function (ev, id) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this template?')
                .ariaLabel('DELETE')
                .targetEvent(ev)
                .ok('DELETE')
                .cancel('CANCEL');
            $mdDialog.show(confirm).then(function () {
                TemplatesService.remove(id)
                    .then(function () {
                        toastr.success('Template removed successfully.');
                        $scope.fnGetTemplates();
                    }, function () {
                        toastr.error('Template not remove');
                    });
            });
        };

        $scope.fnInit = function () {
            $scope.fnGetTemplates();
        };
    });
