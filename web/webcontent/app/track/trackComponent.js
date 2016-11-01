var trackModule = angular.module('trackModule');
var TrackController = ['$i18n', 'trackListService', 'mainService', 'artistService', 'scoreEditorService',
    function ($i18n, trackListService, mainService, artistService, scoreEditorService) {

        var self = this;

        self.play = function (track) {
            trackListService.playSelected(track);
        };

        self.loadArtist = function () {
            artistService.loadArtist();
        };

        self.showScoreEditorPopup = function () {
            scoreEditorService.showScoreEditorPopup();
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
