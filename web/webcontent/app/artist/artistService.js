/**
 * Created by diego on 8/10/2016.
 */

var artistModule = angular.module('artistModule');
artistModule.factory('artistService', ['UserApiService', '$i18n', '$freevenModal',
    function (UserApiService, $i18n, $freevenModal) {

        var artistService = function () {

            var self = this;

            self.artist = {};

            self.loadArtist = function () {
                console.log("Consultando artista..");
                /*UserApiService.query(
                    //Param
                    {},
                    function (response) {
                        self.artist = response;
                    },
                    function (error) {
                        console.log('Error loading all users');
                    });*/
            };

        };
        return new artistService();
    }]);
