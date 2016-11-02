var userMenuModule = angular.module('userMenuModule');
var UserMenuController = ['$i18n', 'userMenuService', 'loginService', 'mainService',
    'userEditService', '$cookieStore',
    function ($i18n, userMenuService, loginService, mainService, userEditService, $cookieStore) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.userMenu = userMenuService;

        self.login = loginService;

        self.user = mainService;

        self.userEdit = userEditService;

        self.idUserAuth = $cookieStore.get('user_data').id_user;

        self.userEdit.getUser(self.idUserAuth);

        self.showLoginPopup = function () {
            self.userMenu.showLoginPopup();
        };

        self.showEditPopup = function () {

            self.userEdit.getUser(self.idUserAuth);
            self.userEdit.showEditPopup();
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
