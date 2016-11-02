/**
 * Created by diego on 8/10/2016.
 */

var forgotPasswordModule = angular.module('forgotPasswordModule');
forgotPasswordModule.factory('forgotPasswordService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$filter', 'userEditService',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $filter, userEditService) {

        var forgotPasswordService = function () {

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

            this.sendUsername = function () {

                var self = this;
                UserApiService.forgotPasswordUser(
                    self.username,
                    function (response) {
                        notifierService.success("Solicitud enviada", response.status);
                    },
                    function (error) {

                    });
                $freevenModal.closePopup();
            };

        };
        return new forgotPasswordService();
    }]);
