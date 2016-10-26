/**
 * Created by diego on 8/10/2016.
 */

var userEditModule = angular.module('userEditModule');
userEditModule.factory('userEditService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$filter',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $filter) {

        var userEditService = function () {

            var self = this;

            self.user = {};

            self.user.first_name = "Diego";
            self.user.email = "yego23@gmail.com";
            self.user.last_name = "Ruiz";
            self.user.username = "yego";
            self.user.password1 = "diego123";
            self.user.password2 = "diego123";
            self.user.is_artist = "True";
            self.user.artistic_name = "El artista";
            self.user.bank_account_number = 1234567890
            self.user.bank_account_type = "AH";
            self.user.bank = "Banco de Bogotá";
            self.user.address = "Calle 19 A 12 12";
            self.user.city = "Bogotá";
            self.user.country = "CO";
            self.user.telephone_number = 9001234;
            self.user.birth_date = new Date("1991-08-23");

            this.showEditPopup = function () {
                $freevenModal.showPopup({}, {
                    template: '<user-edit title ="UserEdit"> </user-edit>'
                });
            };

            this.getUser = function () {
                self.user.first_name = "Diego";
                self.user.email = "yego23@gmail.com";

            }

        };
        return new userEditService();
    }]);


