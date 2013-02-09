describe('NavigationCrtl', function () {
    'use strict';

    var scope, ctrl, $httpBackend;

    beforeEach(module('contactmanager'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('NavigationCtrl', { $scope: scope });
    }));

    //beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
    //    $httpBackend = _$httpBackend_;
    //    $httpBackend.expectGET('phones/phones.json').
    //        respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

    //    scope = $rootScope.$new();
    //    ctrl = $controller(PhoneListCtrl, { $scope: scope });
    //}));

    it('should attach $location to $scope.location', function () {
        expect(scope.location).not.toBeNull();
    });
});