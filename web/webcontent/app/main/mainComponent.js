var  mainModule = angular.module('mainModule');
var MainController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

mainModule.component('main', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: MainController,
    controllerAs: 'ctrl',
    template: require('./main.html')
});
