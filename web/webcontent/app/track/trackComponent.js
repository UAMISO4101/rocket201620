var trackModule = angular.module('trackModule');
var TrackController = ['$i18n', 'trackListService', 'mainService', 'artistService', 'scoreEditorService',
    function ($i18n, trackListService, mainService, artistService, scoreEditorService) {

        var self = this;
        self.trackListService = trackListService;

        self.play = function (track) {
            trackListService.playSelected(track);
        };

        self.loadArtist = function () {
            artistService.loadArtist();
        };

        self.showScoreEditorPopup = function (track) {
            if (mainService.isAuthenticated()) {
                scoreEditorService.showScoreEditorPopup(track);
            }
        };

        self.addToPlayList = function (track, playList) {
            trackListService.addToPlayList(track, playList);
        };

        self.greaterThanOrEqual = function (value) {
            var self = this;
            if (self.frModel && self.frModel.score) {
                return self.frModel.score >= value;
            }
            return false;
        };

    }];

trackModule.component('track', {
    transclude: true,
    bindings: {
        title: '@',
        frModel: '=frModel',
        hideItemInfo: '@'
    },
    controller: TrackController,
    controllerAs: 'ctrl',
    template: require('./track.html')
});
