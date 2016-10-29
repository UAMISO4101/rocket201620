var notifierModule = angular.module('notifierModule', ['angular-growl']);

notifierModule.config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(50000);
    growlProvider.globalDisableIcons(true);
    growlProvider.globalDisableCountDown(true);
}]);