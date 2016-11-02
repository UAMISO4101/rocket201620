/**
 * Created by diego on 8/10/2016.
 */

var restorePasswordModule = angular.module('restorePasswordModule');
restorePasswordModule.factory('restorePasswordService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$filter', 'userEditService',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $filter, userEditService) {

        var restorePasswordService = function () {

            var self = this;

            self.username = {};

            this.showPopup = function () {

                $freevenModal.showPopup({}, {
                    size: 'small',
                    template: '<forgot-password></forgot-password>'
                });
            };

            this.closeModal = function () {
                $freevenModal.closePopup();
            };

            this.sendChangePassword = function () {

                var self = this;
                UserApiService.restorePasswordUser(
                    self.username,
                    function (response) {
                        notifierService.success("Cambio de contraseña", response.status);
                        setTimeout(function () {
                            window.location.assign('#/');
                            window.location.reload(true);
                        }, 5000);
                    },
                    function (error) {
                    });


            };

        };
        return new restorePasswordService();
    }]);
