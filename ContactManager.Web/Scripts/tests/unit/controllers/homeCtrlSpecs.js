describe('HomeCrtl', function () {
    'use strict';

    var scope, ctrl;

    beforeEach(module('contactmanager'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('HomeCtrl', { $scope: scope });
    }));

});