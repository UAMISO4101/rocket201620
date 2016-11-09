/**
 * Created by diego on 8/10/2016.
 */

var postCreatorModule = angular.module('postCreatorModule');
postCreatorModule.factory('postCreatorService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$cookieStore',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $cookieStore) {
        var postCreatorService = function () {

            var self = this;

            self.event = {};

            self.loading = false;

            self.idUserAuth = $cookieStore.get('user_data').id_user;

            self.saveEvent = function () {
                self.event.artistId = self.idUserAuth;
                console.log("saveEvent");
                console.log(self.event);

                setTimeout(function () {
                    self.loading = true;
                }, 5000);


            };
        };
        return new postCreatorService();
    }]);
