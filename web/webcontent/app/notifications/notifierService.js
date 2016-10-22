var notifierModule = angular.module('notifierModule');
notifierModule.factory('notifierService', ['growl', function (growl) {
    var Notifier = function () {
        var config = {};
        this.success = function (title, text) {
            growl.success('<div class="alert_content_success">' +
                '<i class="bz-icon bz-icon-check bz-cd-icon-23"></i>' +
                '<b>' + title + '</b> </div>' +
                '<span>' + text + '<span>', config);
        };
        this.info = function (title, text) {
            growl.info('<b>' + title + '</b> </br>' + text, config);
        };
        this.warning = function (title, text) {
            growl.warning('<b>' + title + '</b> </br>' + text, config);
        };
        this.error = function (title, text) {
            growl.error('<div class="alert_content_error">' +
                '<i class="bz-icon bz-icon-error bz-cd-icon-23"></i>' +
                '<b>' + title + '</b> </div>' +
                '<span>' + text + '<span>', config);
        };
    };
    return new Notifier();
}]);


