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

            this.showEditPopup = function () {
                $freevenModal.showPopup({}, {
                    template: '<user-edit title ="UserEdit"> </user-edit>'
                });
            };

            this.closeModal = function () {
                $freevenModal.closePopup();
            };

            this.getUser = function (id) {

                //TODO CONSUME GET USER

                var self = this;
                UserApiService.getUser({userId: id}, function (response) {
                        if (response.username != undefined) {
                            self.loadUser(response);
                        }
                    },
                    function (error) {
                    });
            };

            this.saveUser = function () {
                //TODO CONSUME SERVICE SAVE

                //window.location.reload(true);

                $freevenModal.closePopup();

                notifierService.success($i18n.translate.user_edit_success, $i18n.translate.user_edit_success_detail);
            };

            this.loadUser = function (response) {
                self.user.first_name = response.first_name;
                self.user.email = response.email;
                self.user.last_name = response.last_name;
                self.user.username = response.username;
                if (response.artist != undefined) {
                    self.user.is_artist = "True";
                    self.user.artistic_name = response.artist.artistic_name;
                    self.user.bank_account_number =  parseInt(response.artist.bank_account_number);
                    self.user.bank_account_type = response.artist.bank_account_type;
                    self.user.bank = response.artist.bank;
                    self.user.address = response.artist.address;
                    self.user.city = response.artist.city;
                    self.user.country = response.artist.country;
                    self.user.telephone_number = parseInt(response.artist.telephone_number);
                    self.user.birth_date = new Date(response.artist.birth_date);
                    if (response.artist.avatar != null || response.artist.avatar != '') {
                        self.user.avatar = response.artist.avatar;
                    } else {
                        self.user.avatar = 'data:image/png;base64,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';
                    }
                }
                else {
                    self.user.is_artist = "False";
                    self.user.artistic_name = "";
                    self.user.bank_account_number =  "";
                    self.user.bank_account_type = "";
                    self.user.bank = "";
                    self.user.address = "";
                    self.user.city = "";
                    self.user.country = "";
                    self.user.telephone_number = "";
                    self.user.birth_date = "";
                    self.user.avatar = 'data:image/png;base64,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';
                }

            }

        };
        return new userEditService();
    }]);
