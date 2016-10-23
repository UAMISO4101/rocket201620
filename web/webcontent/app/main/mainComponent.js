var mainModule = angular.module('mainModule');
var MainController = ['$i18n', 'mainService', function ($i18n, mainService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.mainService = mainService;
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
