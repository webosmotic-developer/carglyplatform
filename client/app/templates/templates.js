'use strict';

angular.module('carglyplatformApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main.templates', {
                url: '/templates',
                templateUrl: 'app/templates/templates.html',
                controller: 'TemplatesCtrl',
                authenticate: true
            })
            .state('main.template', {
                url: '/template?:id',
                templateUrl: 'app/templates/template/template.html',
                controller: 'TemplateCtrl',
                authenticate: true
            });
    });
