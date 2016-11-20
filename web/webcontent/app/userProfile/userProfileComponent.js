var userProfileModule = angular.module('userProfileModule');
var UserProfileController = ['$i18n', 'userProfileService', '$routeParams',
    function ($i18n, userProfileService, $routeParams) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.user = userProfileService;

        userProfileService.loadUserProfile($routeParams.idUser);
    }];

userProfileModule.component('userProfile', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: UserProfileController,
    controllerAs: 'ctrl',
    template: require('./userProfile.html')
});
