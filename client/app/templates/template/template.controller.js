'use strict';

angular.module('carglyplatformApp')
    .controller('TemplateCtrl', function ($scope, $sce, $stateParams, toastr, TemplatesService) {

        $scope.fnTrustAsHtml = function(html_code) {
            return $sce.trustAsHtml(html_code);
        };

        $scope.fnAddTemplate = function (template) {
            if(template._id) {
                TemplatesService.update(template)
                    .then(function () {
                        toastr.success('Template updated successfully.');
                    }, function(){
                        toastr.error('Template not update');
                    });
            } else {
                TemplatesService.add(template)
                    .then(function () {
                        toastr.success('Template added successfully.');
                    }, function(){
                        toastr.error('Template not added.');
                    });
            }
        };

        $scope.fnGetTemplate = function(id){
            TemplatesService.fetch(id)
                .then(function (res) {
                    $scope.template = res;
                });
        };

        $scope.fnInitTemplate = function(){
            if($stateParams.id){
                $scope.fnGetTemplate($stateParams.id);
            } else {
                $scope.template = {};
            }
        };
    });
