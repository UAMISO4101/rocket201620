var forgotPasswordModule = angular.module('forgotPasswordModule');
var ForgotPasswordController = ['$i18n', 'forgotPasswordService', function ($i18n, forgotPasswordService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.forgotPassword = forgotPasswordService;

    self.close = function () {
        self.forgotPassword.closeModal();
    };

    self.validateForgotPassword = function () {
        self.forgotPassword.sendUsername();
    };

}];

forgotPasswordModule.component('forgotPassword', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: ForgotPasswordController,
    controllerAs: 'ctrl',
    template: require('./forgotPassword.html')
});
