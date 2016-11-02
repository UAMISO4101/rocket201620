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


            this.showLoginPopup = function () {
                $freevenModal.showPopup({}, {
                    template: '<login title ="Login"> </login>'
                });
            };

            this.showRegisterPopup = function () {
                $freevenModal.showPopup({}, {
                    template: '<user-register title ="Register"> </user-register>'
                });
            };

        };
        return new UserMenuService();
    }]);


