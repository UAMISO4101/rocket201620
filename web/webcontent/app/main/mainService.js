/**
 * Created by diego on 8/10/2016.
 */

var mainModule = angular.module('mainModule');
mainModule.factory('mainService', ['$i18n', '$freevenModal', 'notifierService',
    function ($i18n, $freevenModal, notifierService) {
        var mainService = function () {

            var self = this;

            self.user = {};

            self.isAuthenticated = function () {
                if (self.user.token) {
                    return true;
                } else {
                    return false;
                }
            }

        };
        return new mainService();
    }]);


