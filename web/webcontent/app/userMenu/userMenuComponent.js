var userMenuModule = angular.module('userMenuModule');
var UserMenuController = ['$i18n', 'userMenuService', 'loginService','mainService',
    'userEditService',function ($i18n, userMenuService, loginService,mainService,userEditService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.userMenu = userMenuService;

    self.login = loginService;

    self.user = mainService;

    self.editUser = userEditService;

    self.showLoginPopup = function () {
        self.userMenu.showLoginPopup();
    };

    self.showEditPopup = function () {
        self.editUser.showEditPopup();
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
