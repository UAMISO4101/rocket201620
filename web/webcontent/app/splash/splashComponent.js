var  splashModule = angular.module('splashModule');
var SplashController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

splashModule.component('splash', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: SplashController,
    controllerAs: 'ctrl',
    template: require('./splash.html')
});
