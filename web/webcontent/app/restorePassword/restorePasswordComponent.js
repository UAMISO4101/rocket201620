var restorePasswordModule = angular.module('restorePasswordModule');
var RestorePasswordController = ['$i18n', '$freevenModal','$routeParams', function ($i18n, $freevenModal,$routeParams) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;

    console.log($routeParams.idUser);

}];

restorePasswordModule.component('restorePassword', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: RestorePasswordController,
    controllerAs: 'ctrl',
    template: require('./restorePassword.html')
});
