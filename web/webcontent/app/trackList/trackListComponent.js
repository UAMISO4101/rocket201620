var trackListModule = angular.module('trackListModule');
var TrackListController = ['$routeParams', 'trackListService', function ($routeParams, trackListService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.trackList = trackListService;

    if($routeParams && $routeParams.idPlayList){
        self.trackList.showPlayListContent($routeParams.idPlayList);
    }
    //self.trackList.loadTracks();
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
