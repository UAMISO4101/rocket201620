/**
 * Created by diego on 8/10/2016.
 */

var forgotPasswordModule = angular.module('forgotPasswordModule');
forgotPasswordModule.factory('forgotPasswordService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$filter','userEditService',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $filter,userEditService) {

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
                //TODO CONSUME SERVICE SAVE
                console.log("Ok" +self.username.username);
                $freevenModal.closePopup();
                notifierService.success($i18n.translate.user_edit_success, "Enviado");
            };

        };
        return new forgotPasswordService();
    }]);
