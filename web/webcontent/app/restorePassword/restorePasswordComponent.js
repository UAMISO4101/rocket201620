var restorePasswordModule = angular.module('restorePasswordModule');
var RestorePasswordController = ['$i18n', '$freevenModal', '$routeParams', 'restorePasswordService',
    function ($i18n, $freevenModal, $routeParams, restorePasswordService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.passwordOk = true;

        console.log($routeParams.idUser);

        self.restorePassword = restorePasswordService;

        self.validateRestorePassword = function () {
            if (self.restorePassword.username.username == undefined ||
                self.restorePassword.username.password == undefined ||
                self.restorePassword.username.password2 == undefined) {
            } else {
                if (self.restorePassword.username.password !=
                    self.restorePassword.username.password2) {
                    self.passwordOk = false;
                } else {
                    self.passwordOk = true;
                    self.restorePassword.sendChangePassword();
                }
            }
        };


    }];

restorePasswordModule.component('restorePassword', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: RestorePasswordController,
    controllerAs: 'ctrl',
    template: require('./restorePassword.html')
});
