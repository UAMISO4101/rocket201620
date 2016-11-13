var  announcementCreatorModule = angular.module('announcementCreatorModule');
var AnnouncementCreatorController = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

announcementCreatorModule.component('announcementCreator', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: AnnouncementCreatorController,
    controllerAs: 'ctrl',
    template: require('./announcementCreator.html')
});
