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
                    return true;
                } else {
                    return false;
                }
            };
            self.setUserToken = function (token) {
                $cookieStore.put('user_token', token);
            };

            self.deleteUserToken = function (){
                $cookieStore.remove('user_token');
            }

        };
        return new mainService();
    }]);


