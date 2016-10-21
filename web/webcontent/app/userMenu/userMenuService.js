/**
 * Created by diego on 8/10/2016.
 */

var userMenuModule = angular.module('userMenuModule');
userMenuModule.factory('userMenuService', ['UserApiService', '$i18n', '$freevenModal',
    function (UserApiService, $i18n, $freevenModal) {
        var UserMenuService = function () {

            var self = this;

            self.newUser = {};

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
                            $('#modalRegister .close').attr("onclick", "window.location.assign('/#/');window.location.reload(true)");
                            $('#modalRegister .modal-title').html("Error en registro!")
                            $('#modalRegister .modal-body').html(response.status)
                        } else {
                            $('#modalRegister .close').attr("onclick", "window.location.assign('/#/');window.location.reload(true)");
                            $('#modalRegister .modal-title').html("Registro Exitoso!")
                            $('#modalRegister .modal-body').html("Ya puedes iniciar sesión en Sonidos Libres.")
                        }


                        console.log(response);
                    },
                    function (error) {
                        $('#modalRegister .close').attr("onclick", "window.location.assign('/#/');window.location.reload(true)");
                        $('#modalRegister .modal-title').html("Error en registro!")
                        $('#modalRegister .modal-body').html(error)
                        console.log('Error saving user');
                    });
            };
            self.deleteUser = function (guidUser) {
                UserApiService.delete(
                    {guidUser: guidUser},
                    function (response) {
                        console.log(response);
                    },
                    function (error) {
                        console.log('Error delete user');
                    });
            };


            this.showLoginPopup = function () {
                $freevenModal.showPopup({}, {
                    template: '<login title ="Login"> </login>'
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
        return new UserMenuService();
    }]);


