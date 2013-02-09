angular.module('contactmanager')
    .controller('NavigationCtrl', ['$scope', '$location',
        function ($scope, $location) {
            'use strict';

            $scope.location = $location;
        }
    ]);