var userEditModule = angular.module('userEditModule');
var UserEditController = ['$i18n', '$freevenModal', 'userEditService', function ($i18n, $freevenModal, userEditService) {
    /**
     * Tip: add here only visual logic
     */

    var self = this;

    self.userEdit = userEditService;

    self.closeEditPopup = function () {
        $freevenModal.closePopup();
    };


}];

userEditModule.component('userEdit', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserEditController,
    controllerAs: 'ctrl',
    template: require('./userEdit.html')
});
