//reference test dependencies to make http://chutzpah.codeplex.com/ happy  

/// <reference path="\Scripts\angular-1.1.2\angular.js" />
/// <reference path="\Scripts\angular-1.1.2\angular-mocks.js" />

/// <reference path="\Scripts\app\app.js" />
/// <reference path="\Scripts\app\controllers\contactCtrl.js" />
/// <reference path="\Scripts\app\services\contactService.js" />

describe('ContactCtrl', function () {
    'use strict';

    var scope, ctrl, contactServiceMock;
    var getAllContacts_deferred;

    beforeEach(module('contactmanager'));

    beforeEach(inject(function ($rootScope, $controller,$q) {
        scope = $rootScope.$new();

        contactServiceMock = {
            getAllContacts: function () {
                getAllContacts_deferred = $q.defer();            
                return getAllContacts_deferred.promise;
            },
            saveContact: function (contact) {
                var deferred = $q.defer();
                deferred.resolve({ data: contact });
                return deferred.promise;
            }
        };

        $controller('ContactCtrl', {
            $scope: scope,
            ContactService: contactServiceMock
        });
    }));

    it('should set contact to new contact object when addContact() is called', function () {
        //Arrange
        expect(scope.contact).not.toBeDefined();

        //Act
        scope.addContact();

        //Assert
        expect(scope.contact).toEqual(jasmine.any(Object));
    });


    it('should delete $scope.contact when clearContact is called', function () {
        //Arrange
        scope.contact = {};

        //Act
        scope.clearContact();

        //Assert
        expect(scope.contact).not.toBeDefined();
    });

    it('should attach an array of contacts to $scope.contacts', function () {
        expect(scope.contacts).toEqual(jasmine.any(Array));
    });


    it('should query contactService.getAllContacts and attach the results to $scope.contacts', function () {
        //Arrange
        //Act
        getAllContacts_deferred.resolve({ data: [{}, {}] });
        scope.$apply();

        //Assert
        expect(scope.contacts.length).toBe(2);
    });

    it('should call contactService.saveContact with $scope.contact and add the result to $scope.contacts', function () {
        //Arrange
        var expected = { firstName: 'Fabian' };
        scope.contact = expected;


        //Act
        scope.saveContact();
        scope.$apply();

        //Assert
        expect(scope.contacts.length).toBe(1);
        expect(scope.contacts[0]).toEqual(expected);
    });

});