/**
 * Created by diego on 8/10/2016.
 */

var loginModule = angular.module('loginModule');
loginModule.factory('loginService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService) {
        var loginService = function () {

            var self = this;

            self.user = {};

            self.login = function () {
                var self = this;
                UserApiService.loginUser(
                    //Param
                    self.user,
                    function (response) {
                        //self.usuario = response;
                        if (response.token) {
                            mainService.setUserToken(response.token);
                            notifierService.success("Iniciando sesión", "Bienvenido: " + response.first_name);
                        } else {
                            notifierService.error("Error de autenticación", response.status);
                        }
                    },
                    function (error) {
                        console.log('Error get user auth');
                    });
            };
            self.logout = function(){
                mainService.deleteUserToken();
            };

            this.showRegisterPopup = function () {
                $freevenModal.showPopup({}, {
                    template: '<user-register title ="Register"> </user-register>'
                });
            };
        };
        return new loginService();
    }]);

