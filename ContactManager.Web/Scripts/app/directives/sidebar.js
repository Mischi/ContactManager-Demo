angular.module('contactmanager')
    .directive('sidebar', function () {
        'use strict';

        return {
            restrict: 'AE',
            replace: true,
            scope: {
                data: '=',
                template: '=',
                cancel: '=',
                ok: '='
            },
            template: '<div class="sidebar" ng-include="template"></div>',
            link: function postLink(scope, element) {
                scope.$watch('data', function () {
                    if (scope.data) {
                        element.addClass('sidebar-shown');
                    } else {
                        element.removeClass('sidebar-shown');
                    }
                });
            }
        };
    });