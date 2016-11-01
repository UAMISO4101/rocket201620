var  artistModule = angular.module('artistModule');
var ArtistController = ['$i18n','artistService', '$routeParams', function ($i18n,artistService,$routeParams) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    self.artist = artistService;
    
    artistService.loadArtist($routeParams.idArtist);

}];

artistModule.component('artist', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: ArtistController,
    controllerAs: 'ctrl',
    template: require('./artist.html')
});
