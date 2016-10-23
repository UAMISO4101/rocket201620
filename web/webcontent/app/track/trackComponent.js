var trackModule = angular.module('trackModule');
var TrackController = ['$i18n', 'trackListService', function ($i18n, trackListService) {
    var self = this;
    self.play = function (track) {
        trackListService.playSelected(track);
    }
}];

trackModule.component('track', {
    transclude: true,
    bindings: {
        title: '@',
        frModel: '=frModel'
    },
    controller: TrackController,
    controllerAs: 'ctrl',
    template: require('./track.html')
});
