/**
 * Created by diego on 8/10/2016.
 */

var eventListModule = angular.module('eventListModule');
eventListModule.factory('eventListService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$cookieStore',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $cookieStore) {
        var eventListService = function () {

            var self = this;

            self.events = [];

            self.event = {};
            self.event2 = {};

            self.loading = false;

            self.listEvents = function () {
                self.events = [];
                self.loadMockData();

            };


            self.loadMockData = function () {
                self.event.eventName = "El concierto del año";
                self.event.eventPlace = "Bogotá D.C.";
                self.event.date_event = new Date();
                self.event.eventDescription = "Un súper concierto. Puedes comprar las boletas por internet";
                self.event.artist_id = 2;
                self.event.artistName = "Adele";

                self.event2.eventName = "Festejemos el dia de la familia";
                self.event2.eventPlace = "Bogotá D.C.";
                self.event2.date_event = new Date();
                self.event2.eventDescription = "Ven en familia a escucharme, tendré de las mejores obras musicales";
                self.event2.artist_id = 3;
                self.event2.artistName = "Otro artista";

                self.events.push(self.event);
                self.events.push(self.event2);

            }


        };
        return new eventListService();
    }]);
