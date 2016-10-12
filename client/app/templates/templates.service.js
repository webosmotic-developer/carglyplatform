'use strict';

angular.module('carglyplatformApp')
    .factory('TemplatesService', function ($http, $q) {

        // Public API here
        return {
            list: function () {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.get('/api/templates')
                    .then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            },

            fetch: function (id) {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.get('/api/templates/' + id)
                    .then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            },

            add: function (obj) {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.post('/api/templates', obj)
                    .then(function (result) {
                        deferred.resolve(result);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            },

            update: function (obj) {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.put('/api/templates/' + obj._id, obj)
                    .then(function (result) {
                        deferred.resolve(result);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            },

            remove: function (id) {

                // create deferred object using $q
                var deferred = $q.defer();

                $http.delete('/api/templates/' + id)
                    .then(function (result) {
                        deferred.resolve(result);
                    }, function (error) {
                        deferred.reject(error);
                    });

                //retrun deferred.resolve as promise
                return deferred.promise;

            }

        };
    });
