var searchModule = angular.module('searchModule');
var SearchController = ['$i18n', 'trackListService', function ($i18n, trackListService) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.parameter = null;
    self.changeParameter = function () {
        self = this;
        if (self.parameter.length > 3) {
            var params = {
                search: self.parameter,
                page: 1
            };
            trackListService.loadTracks(params);
        }
    };
    self.cancel = function () {
        self = this;
        self.parameter = null;
        trackListService.loadTracks({});
    };
    self.show = function () {
        self = this;
        return self.parameter && self.parameter.length > 0;
    };
}];

searchModule.component('search', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: SearchController,
    controllerAs: 'ctrl',
    template: require('./search.html')
});
