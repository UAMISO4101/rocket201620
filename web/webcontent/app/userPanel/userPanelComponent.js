var userPanelModule = angular.module('userPanelModule');
var UserPanelController = ['trackListService', 'mainService', 'helpService', 'listCreatorService', '$q',
    function (trackListService, mainService, helpService, listCreatorService, $q) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.mainService = mainService;
        self.trackListService = trackListService;
        self.loadTopTracks = function () {
            trackListService.loadTopTracks();
        };
        self.enableHelp = function () {
            helpService.setEnable(true);
            helpService.enablePlayer();
        };

        self.showListCreator = function () {
            var self = this;
            var deferred = listCreatorService.showCreatorPopup();
            $q.when(deferred).then(
                function handleResolve(value) {
                    self.trackListService.loadPlayList();
                }
            );
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
