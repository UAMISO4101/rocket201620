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
                if (self.user.token) {
                    return true;
                }
                return false;
            };

            self.logout = function () {
                self.user = {};
                self.deleteUserCookies();
            };

            self.isArtist = function () {
                return self.user.is_artist;
            };

            self.getArtistId = function () {
                return self.user.id_artist;
            };

            self.setUserData = function (userData) {
                self.user = userData;
                self.saveUserCookies(userData);
            };

            self.getUserData = function () {
                if (!self.user) {
                    self.loadUserDataFromCookies();
                }
                return self.user;
            };
            self.loadUserDataFromCookies = function () {
                self.user = $cookieStore.get('user_data') || {};
            };

            self.saveUserCookies = function (userData) {
                $cookieStore.put('user_data', userData);
            };

            self.deleteUserCookies = function () {
                $cookieStore.remove('user_data');
            }

        };
        var main = new mainService();
        main.loadUserDataFromCookies();
        return main;
    }]);
