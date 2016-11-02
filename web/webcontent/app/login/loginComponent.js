var loginModule = angular.module('loginModule');
var LoginController = ['$i18n', 'loginService', '$freevenModal', 'userMenuService', 'loginService', '$location',
    'forgotPasswordService',
    function ($i18n, loginService, $freevenModal, userMenuService, loginService, forgotPasswordService, $location) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.userLogin = loginService;

        self.userMenu = userMenuService;

        self.forgotPassword = forgotPasswordService;


        self.login = function () {
            self.userLogin.login();
        };

        self.logout = function () {
            self.userLogin.logout();
            $location.path('/');
        };

        self.closeLoginPopup = function () {
            $freevenModal.closePopup();
        };

        self.showRegisterPopup = function () {
            self.userMenu.showRegisterPopup();
        };

        self.showForgotPasswordPopup = function () {
            self.forgotPassword.showPopup();
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
