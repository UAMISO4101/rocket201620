var i18nModule = angular.module('i18nModule');

i18nModule.factory('$i18n', ['$http', '$cookieStore', '$translate', function ($http, $cookieStore, $translate) {
    var i18nService = function () {
        this.currentLanguageCulture = $cookieStore.get('currentLanguageCulture') || 'en-us';
        this.translate = {};
        var languages = {
            'es-co': require('./resources/es-co.json'),
            'en-us': require('./resources/en-us.json')
        };

        this.changeResource = function () {
            $translate.use(this.currentLanguageCulture);
            this.translate = languages[this.currentLanguageCulture];
            $cookieStore.put('currentLanguageCulture', this.currentLanguageCulture);
            $http.defaults.headers.common['Accept-Language'] = this.currentLanguageCulture.split('-')[0];
        };

        this.changeResource();
    };
    return new i18nService();
}]);

