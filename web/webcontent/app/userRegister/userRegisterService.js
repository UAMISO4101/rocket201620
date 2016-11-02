/**
 * Created by diego on 8/10/2016.
 */

var userRegisterModule = angular.module('userRegisterModule');
userRegisterModule.factory('userRegisterService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    function (UserApiService, $i18n, $freevenModal, notifierService) {
        var UserRegisterService = function () {

            var self = this;

            self.newUser = {};

            self.existUser = true;

            self.loadUsers = function () {
                UserApiService.query(
                    //Param
                    {},
                    function (response) {
                        self.users = response;
                    },
                    function (error) {
                        console.log('Error loading all users');
                    });
            };

            self.saveUser = function () {
                UserApiService.save(
                    JSON.stringify(self.newUser),
                    function (response) {
                        var respuest = response.status;
                        if (respuest !== 'OK') {
                            if (respuest == 'Usuario ya existe.') {
                                self.existUser = false;
                            } else {
                                self.existUser = true;
                            }
                        } else {
                            $freevenModal.closePopup();
                            notifierService.success($i18n.translate.user_creation_success, $i18n.translate.user_creation_success_detail);
                        }

                    },
                    function (error) {
                        $freevenModal.closePopup();
                        notifierService.success($i18n.translate.user_creation_error, '');
                    });
            };

            this.checkForm = function (form) {
                if (!form.terms.checked) {
                    alert("Please indicate that you accept the Terms and Conditions");
                    form.terms.focus();
                    return false;
                }
                return true;
            }
        };
        return new UserRegisterService();
    }]);


