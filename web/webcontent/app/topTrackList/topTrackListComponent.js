var topTrackListModule = angular.module('topTrackListModule');
var TopTrackListController = ['trackListService', 'artistService',
    function (trackListService, artistService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.trackList = trackListService;
        self.trackList.loadTopTracks({});
        console.log(self.trackList)
        self.loadArtist = function () {
            artistService.loadArtist();
        };
    }];

topTrackListModule.component('topTrackList', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: TopTrackListController,
    controllerAs: 'ctrl',
    template: require('./topTrackList.html')
});
