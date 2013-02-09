angular.module('contactmanager', ['contactmanager.data'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            'use strict';

            $routeProvider
                .when('/', {
                    controller: 'HomeCtrl',
                    templateUrl: 'templates/home.html'
                })
                .when('/contacts', {
                    controller: 'ContactCtrl',
                    templateUrl: 'templates/contacts.html'
                })
                .otherwise({ redirectTo: '/' });

            //Use HTML5 History API if available.
            $locationProvider.html5Mode(true);
        }
    ]);
