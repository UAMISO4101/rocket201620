var userPanelModule = angular.module('userPanelModule');
var UserPanelController = ['trackListService', function (trackListService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.loadTopTracks = function () {
        trackListService.loadTopTracks();
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
