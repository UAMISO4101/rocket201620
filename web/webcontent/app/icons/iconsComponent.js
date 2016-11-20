var  iconsModule = angular.module('iconsModule');
var IconsController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

iconsModule.component('icons', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: IconsController,
    controllerAs: 'ctrl',
    template: require('./icons.html')
});
