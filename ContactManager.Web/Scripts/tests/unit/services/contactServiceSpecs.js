//reference test dependencies to make http://chutzpah.codeplex.com/ happy  

/// <reference path="\Scripts\angular-1.1.2\angular.js" />
/// <reference path="\Scripts\angular-1.1.2\angular-mocks.js" />

/// <reference path="\Scripts\app\services\contactService.js" />

describe('ContactsService', function () {
    'use strict';

    var contactService, $httpBackend;

    beforeEach(module('contactmanager.data'));

    beforeEach(inject(function (ContactService) {
        contactService = ContactService;
    }));

    beforeEach(inject(function (_$httpBackend_) {

        //see http://docs.angularjs.org/api/ngMock.$httpBackend
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should get all contacts from backend when GetALLContacts was called', function () {
        //Arrange
        var contacts;
        $httpBackend.expectGET('api/contacts')
            .respond(200, [{ firstName: 'contact1' }, { firstName: 'contact2' }]);


        //Act
        contactService.getAllContacts().then(function (result) {
            contacts = result.data;
        });

        //flush outstanding requests
        $httpBackend.flush();

        //Assert
        expect(contacts.length).toBe(2);
    });

    it('should save contact to backend when saveContact was called', function () {
        //Arrange
        var contact = { firstName: 'Mischi' };
        var expected = { firstName: 'Mischi', id: 'id' };
        var savedContact;
        $httpBackend.expectPOST('api/contacts', contact)
            .respond(201, expected);

        //Act
        contactService.saveContact(contact).then(function (result) {
            savedContact = result.data;
        });

        //flush outstanding requests
        $httpBackend.flush();

        //Assert
        expect(savedContact).toEqual(expected);
    });
});



