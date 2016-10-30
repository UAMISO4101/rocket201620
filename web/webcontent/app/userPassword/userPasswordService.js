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
                self.user={};
            };

            this.savePassword = function () {
                //TODO CONSUME SERVICE SAVE
                var self = this;
                self.user.username = self.userEdit.user.username;
            
              //  self.user.username = self.userAuth.username;
                UserApiService.userChangePassword (
                    //Param
                    self.user,
                    function (response) {

                      $freevenModal.closePopup();
                      notifierService.success($i18n.translate.user_edit_success, response.status);
                      self.userEdit.showEditPopup();

                    },

                    function (error) {
                        //notifierService.error("Error de autenticación", error.status);//esta notificacion es automatica
                    });
                //window.location.reload(true);

            };


        };
        return new userPasswordService();
    }]);
