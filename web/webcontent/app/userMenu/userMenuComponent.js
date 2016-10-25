var userMenuModule = angular.module('userMenuModule');
var UserMenuController = ['$i18n', 'userMenuService', 'loginService','mainService', function ($i18n, userMenuService, loginService,mainService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.userMenu = userMenuService;

    self.login = loginService;

    self.user = mainService;

    self.showLoginPopup = function () {
        self.userMenu.showLoginPopup();
    };

    self.showRegisterPopup = function () {
        self.userMenu.showRegisterPopup();
    };



}];

userMenuModule.component('userMenu', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserMenuController,
    controllerAs: 'ctrl',
    template: require('./userMenu.html')
});
