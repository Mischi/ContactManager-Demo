angular.module('contactmanager.data', [])
    .value('contactRestEndpoint', 'api/contacts') //Register Route to ContactsController
    .factory('ContactService', ['$http', 'contactRestEndpoint',
        function ($http, contactRestEndpoint) {
            'use strict';

            return {
                getAllContacts: function () {
                    return $http.get(contactRestEndpoint);
                },
                saveContact: function (contact) {
                    return $http.post(contactRestEndpoint, contact);
                }
            };
        }
    ]);