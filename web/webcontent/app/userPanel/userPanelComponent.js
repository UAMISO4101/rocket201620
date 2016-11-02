var userPanelModule = angular.module('userPanelModule');
var UserPanelController = ['trackListService', 'mainService', 'helpService',
    function (trackListService, mainService, helpService ) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.mainService = mainService;
        self.loadTopTracks = function () {
            trackListService.loadTopTracks();
        };
        self.enableHelp = function () {
            helpService.setEnable(true);
            helpService.enablePlayer();
        };
    }];

userPanelModule.component('userPanel', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserPanelController,
    controllerAs: 'ctrl',
    template: require('./userPanel.html')
});
