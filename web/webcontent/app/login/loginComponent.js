var loginModule = angular.module('loginModule');
var LoginController = ['$i18n', 'loginService', '$freevenModal', 'userMenuService', 'loginService',

    function ($i18n, loginService, $freevenModal, userMenuService, loginService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.userLogin = loginService;

        self.userMenu = userMenuService;


        self.login = function () {
             self.userLogin.login();
        };

        self.logout = function(){
            self.userLogin.logout();
        };

        self.closeLoginPopup = function () {
            $freevenModal.closePopup();
        };

        self.showRegisterPopup = function () {
            self.userMenu.showRegisterPopup();
        };
    }];

loginModule.component('login', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: LoginController,
    controllerAs: 'ctrl',
    template: require('./login.html')
});
