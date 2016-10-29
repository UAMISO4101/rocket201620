var mainModule = angular.module('mainModule');
var MainController = ['$i18n', 'mainService', 'helpService',
    function ($i18n, mainService, helpService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.mainService = mainService;
        self.enableHelp = function () {
            helpService.setEnable(true);
        }
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
