//reference test dependencies to make http://chutzpah.codeplex.com/ happy  

/// <reference path="\Scripts\angular-1.1.2\angular.js" />
/// <reference path="\Scripts\angular-1.1.2\angular-mocks.js" />

/// <reference path="\Scripts\app\app.js" />
/// <reference path="\Scripts\app\controllers\homeCtrl.js" />
/// <reference path="\Scripts\app\services\contactService.js" />

describe('HomeCrtl', function () {
    'use strict';

    var scope, ctrl;

    beforeEach(module('contactmanager'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('HomeCtrl', { $scope: scope });
    }));

});