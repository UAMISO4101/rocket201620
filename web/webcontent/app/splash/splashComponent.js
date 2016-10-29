var splashModule = angular.module('splashModule');
var SplashController = ['trackListService', function (trackListService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.trackListService = trackListService;
}];

splashModule.component('splash', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: SplashController,
    controllerAs: 'ctrl',
    template: require('./splash.html')
});
