var  bounceModule = angular.module('bounceModule');
var BounceController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

}];

bounceModule.component('bounce', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: BounceController,
    controllerAs: 'ctrl',
    template: require('./bounce.html')
});
