/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


//var myAppDev = angular.module('contactmanagere2e', ['contactmanager', 'ngMockE2E']);
//myAppDev.run(function ($httpBackend) {
//    contacts = [{ firstName: 'phone1' }, { firstName: 'phone2' }];


//    $httpBackend.whenGET('/api/contacts').respond(contacts);


//    $httpBackend.whenPOST('/contacts').respond(function (method, url, data) {
//        contacts.push(angular.fromJSON(data));
//    });

//    $httpBackend.whenGET(/^\/templates\//).passThrough();

//});
describe('ContactManager App', function() {
    'use strict';


    it('should redirect to / when invalid url was entered', function () {
        browser().navigateTo('/asdw/wadeadwao');
        expect(browser().location().url()).toBe('/');
    });

    describe('Home View', function () {

        beforeEach(function () {
            browser().navigateTo('/');
        });

        it('url should point to  /', function () {
            expect(browser().location().url()).toBe('/');
        });

        it('#menuitem-home should be marked as actice', function () {
            var x = expect(element('#menuitem-home.active').count()).toEqual(1);
        });


    });

    describe('Contact View', function () {

        beforeEach(function () {
            browser().navigateTo('/contacts');
        });

        it('url should point to /contacts', function () {
            expect(browser().location().url()).toBe('/contacts');
        });

        it('#menuitem-contacts should be marked as actice', function () {
            var x = expect(element('#menuitem-contacts.active').count()).toEqual(1);
        });

        it('should load all contacts', function () {
            expect(repeater('.container-contact').count()).toEqual(2);
        });

        it('should add new contact', function () {
            expect(repeater('.container-contact').count()).toEqual(2);

            element('#add-contact').click();
            input('data.firstName').enter('third');
            input('data.lastName').enter('user');
            input('data.age').enter('3');
            element('#add-contact-save').click();

            expect(repeater('.container-contact').count()).toEqual(3);
        });

    });
});