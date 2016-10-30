var trackModule = angular.module('trackModule');
var TrackController = ['$i18n', 'trackListService', 'mainService', 'artistService',
    function ($i18n, trackListService, mainService, artistService) {

        var self = this;

        self.play = function (track) {
            trackListService.playSelected(track);
        };

        self.loadArtist = function () {
            artistService.loadArtist();
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
