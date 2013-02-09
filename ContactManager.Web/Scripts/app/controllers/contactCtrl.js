angular.module('contactmanager')
    .controller('ContactCtrl', ['$scope', 'ContactService',
        function ($scope, contactService) {
            'use strict';

            var contacts = $scope.contacts = [];

            contactService.getAllContacts().then(function (result) {
                result.data.forEach(function (contact) {
                    contacts.push(contact);
                });
            });

            $scope.addContact = function () {
                $scope.contact = {};
            };

            $scope.clearContact = function () {
                delete $scope.contact;
            };

            $scope.saveContact = function () {
                contactService.saveContact($scope.contact)
                    .then(function (result) {
                        $scope.clearContact();
                        contacts.unshift(result.data);
                    });
            };
        }
    ]);