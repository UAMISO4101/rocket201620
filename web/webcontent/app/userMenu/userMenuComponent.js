var userMenuModule = angular.module('userMenuModule');
var UserMenuController = ['$i18n', 'userMenuService', function ($i18n, userMenuService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.userMenu = userMenuService;

    self.showAlert = function () {
        self.userMenu.loadUsers();
    };

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
