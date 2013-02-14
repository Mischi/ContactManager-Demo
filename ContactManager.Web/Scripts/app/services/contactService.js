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
                    if (contact.image) {
                        var formData = new FormData();
                        formData.append('image', contact.image, contact.image.name);

                        return $http.post('api/uploadimage', formData, {
                            headers: { 'Content-Type': false },
                            transformRequest: angular.identity
                        }).then(function (result) {
                            delete contact.imagename;
                            contact.image = result.data[0];
                            return $http.post(contactRestEndpoint, contact);
                        });
                    }
                }
            };
        }
    ]);