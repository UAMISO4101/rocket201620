var  userPanelModule = angular.module('userPanelModule');
var UserPanelController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
}];

userPanelModule.component('userPanel', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserPanelController,
    controllerAs: 'ctrl',
    template: require('./userPanel.html')
});
