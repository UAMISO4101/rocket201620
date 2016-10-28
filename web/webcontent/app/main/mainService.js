/**
 * Created by diego on 8/10/2016.
 */

var mainModule = angular.module('mainModule');
mainModule.factory('mainService', ['$i18n', '$freevenModal', 'notifierService', '$cookieStore',
    function ($i18n, $freevenModal, notifierService, $cookieStore) {
        var mainService = function () {

            var self = this;

            self.user = {};

            self.isAuthenticated = function () {
                self.user.token = $cookieStore.get('user_token');
                if (self.user.token) {
                    self.user.first_name = $cookieStore.get('first_name');
                    return true;
                } else {
                    return false;
                }
            };
            self.setUserToken = function (token) {
                $cookieStore.put('user_token', token);

            };
            self.setUserFirstName = function (first_name) {

                $cookieStore.put('first_name',first_name);
            };

            self.deleteUserToken = function (){
                $cookieStore.remove('user_token');
            }

        };
        return new mainService();
    }]);


