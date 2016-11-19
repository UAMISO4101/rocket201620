// Protected resource interceptor for http
var notifierModule = angular.module('notifierModule');
notifierModule.factory('notifierInterceptor', ['notifierService', '$q', function (notifierService, $q) {
    var Interceptor = function () {
        var _self = {};
        // When a resource is request it will call this method
        this.request = function (config) {
            if (config) {
                if (_self.isStaticResource(config.url)) {
                    return config;
                }
                return config;
            }
            return null;
        };
        // When a resource returns error, it will call this method
        this.responseError = function (rejection) {
            if (rejection.config.skipResponseInterceptor) {
                return $q.reject(rejection);
            }
            if (rejection && rejection.status === 400) {
                if (rejection.data && rejection.data.non_field_errors[0] == 'Los campos item, user deben formar un conjunto único.' && rejection.config.url == 'announcement/vote-create') {
                    notifierService.warning('Ya has votado por esta obra musical', ' ');
                } else {
                    notifierService.error('Bad request', rejection.statusText + ' ' + rejection.config.url);
                }

            }
            if (rejection && rejection.status === 401) {
                notifierService.warning('Unauthorized', rejection.statusText + ' ' + rejection.config.url);
            }
            if (rejection && rejection.status === 404) {
                notifierService.warning('Not Found', rejection.statusText + ' ' + rejection.config.url);
            }
            if (rejection && rejection.status === 500) {
                notifierService.error('Internal error', rejection.statusText + ' ' + rejection.config.url);
            }
            return $q.reject(rejection);
        };
        // private: Determine if an extension is from a static content
        _self.isStaticResource = function (url) {
            var knownStaticExtensions = ['js', 'txt', 'html', 'json', 'js', 'css'];
            var extension = url.split('.').pop();
            return knownStaticExtensions.indexOf(extension) !== -1;
        };
    };
    return new Interceptor();
}]);