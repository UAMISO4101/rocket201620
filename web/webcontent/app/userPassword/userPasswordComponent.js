var userPasswordModule = angular.module('userPasswordModule');
var UserPasswordController = ['$i18n', 'userPasswordService', '$freevenModal',
    function ($i18n, userPasswordService, $freevenModal) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.userPassword = userPasswordService;

        self.passwordOk = true;

        self.close = function () {
            self.userPassword.closeModal();
        };

        self.validatePassword = function () {
            if (self.userPassword.user.password1 == undefined
                || self.userPassword.user.password2 == undefined || self.userPassword.user.password == undefined) {
                return false;
            } else {
                if (self.userPassword.user.password1 != self.userPassword.user.password2) {
                    self.passwordOk = false;
                } else {
                    self.passwordOk = true;
                    self.userPassword.savePassword();
                }
            }
        };

    }];

userPasswordModule.component('userPassword', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserPasswordController,
    controllerAs: 'ctrl',
    template: require('./userPassword.html')
});
