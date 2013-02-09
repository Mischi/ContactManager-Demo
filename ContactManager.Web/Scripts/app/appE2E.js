angular.module('e2e', ['contactmanager', 'ngMockE2E'])
    .run(function ($httpBackend) {
        'use strict';

        var contacts = [{ firstName: 'user1' }, { firstName: 'user2' }];


        $httpBackend.whenGET('api/contacts').respond(contacts);


        $httpBackend.whenPOST('api/contacts').respond(function (method, url, data) {
            data.id = '123124randomguid1234',
            contacts.push(angular.fromJson(data));

            //[status, responseBody, headers]
            return [200, data, ''];
        });

        $httpBackend.whenGET(/templates\//).passThrough();
    });