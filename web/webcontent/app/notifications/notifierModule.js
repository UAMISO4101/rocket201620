var notifierModule = angular.module('notifierModule', ['angular-growl']);

notifierModule.config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableIcons(true);
    growlProvider.globalDisableCountDown(true);
}]);