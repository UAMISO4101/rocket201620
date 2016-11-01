/**
 * Created by diego on 8/10/2016.
 */

var artistModule = angular.module('artistModule');
artistModule.factory('artistService', ['ArtistApiService', '$i18n', '$freevenModal','$resource',
    function (ArtistApiService, $i18n, $freevenModal,$resource) {

        var artistService = function () {

            var self = this;

            self.artist = {};
            self.infoArtist = {};

            self.loadArtist = function (id) {
                var self = this;
                    ArtistApiService.get({userId:id}, function(response) {
                        self.artist = response.user;
                        self.infoArtist.avatar  = response.avatar;
                        self.infoArtist.city =  response.city;
                        self.infoArtist.country = response.country;

                    },
                    function (error) {
                    });

            };



        };
        return new artistService();
    }]);
