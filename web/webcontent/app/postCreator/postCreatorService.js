/**
 * Created by diego on 8/10/2016.
 */

var postCreatorModule = angular.module('postCreatorModule');
postCreatorModule.factory('postCreatorService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$cookieStore', 'UserApiService', 'Upload',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $cookieStore, UserApiService, Upload) {
        var postCreatorService = function () {

            var self = this;

            self.event = {};

            self.loading = false;

            self.idUserAuth = mainService.getArtistId();

            self.saveEvent = function () {
                self.event.artist = self.idUserAuth;
                Upload.upload({
                    url: 'api/user/event-create/',
                    data: {
                        name: self.event.name,
                        date: self.event.date,
                        place: self.event.place,
                        latitude: 0,
                        longitude: 0,
                        description: self.event.description,
                        image: self.event.image,
                        artist: self.event.artist,
                    }
                }).progress(function (evt) {
                }).success(function (data, status, headers, config) {
                    if (status == 201) {
                        notifierService.success("Eventos", "Tu evento ha sido creado");
                    } else {
                        notifierService.error("Eventos", "Error creando el evento");
                    }
                });

                setTimeout(function () {
                    self.loading = true;
                }, 5000);


            };
        };
        return new postCreatorService();
    }]);
