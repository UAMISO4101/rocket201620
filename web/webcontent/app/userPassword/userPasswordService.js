/**
 * Created by diego on 8/10/2016.
 */

var userPasswordModule = angular.module('userPasswordModule');
userPasswordModule.factory('userPasswordService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$filter','userEditService',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $filter,userEditService) {

        var userPasswordService = function () {

            var self = this;

            self.user = {};

            self.userEdit = userEditService;

            this.showEditPopup = function () {

                $freevenModal.showPopup({}, {
                    size: 'small',
                    template: '<user-password title ="UserPassword"> </user-password>'
                });
            };

            this.closeModal = function () {
                $freevenModal.closePopup();
                self.userEdit.showEditPopup();
            };

            this.savePassword = function () {
                //TODO CONSUME SERVICE SAVE
                //window.location.reload(true);
                $freevenModal.closePopup();
                notifierService.success($i18n.translate.user_edit_success, $i18n.translate.user_password_success_detail);
                self.userEdit.showEditPopup();
            };

        };
        return new userPasswordService();
    }]);
