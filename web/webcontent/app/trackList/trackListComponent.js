var trackListModule = angular.module('trackListModule');
var TrackListController = ['$i18n', 'trackListService', function ($i18n, trackListService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.trackList = trackListService;
    self.trackList.loadTracks({});
}];

trackListModule.component('trackList', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: TrackListController,
    controllerAs: 'ctrl',
    template: require('./trackList.html')
});
