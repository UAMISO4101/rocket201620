(function (window, document) {
  'use strict';
  var appConfigurations = window.appConfigurations || (window.appConfigurations = {});
  angular.extend(appConfigurations, {
    'productionConfiguration': ['$routeProvider', '$httpProvider', '$translateProvider',
      function configuration($routeProvider, $httpProvider, $translateProvider) {
        var languageEs = require('../app/i18n/resources/es-co.json');
        var languageEn = require('../app/i18n/resources/en-us.json');
        $translateProvider.translations('es-co', languageEs);
        $translateProvider.translations('en-us', languageEn);
        $translateProvider.preferredLanguage('en-co');
        $translateProvider.useSanitizeValueStrategy(null);
        $routeProvider.when('/', {
          template: '<track-list> </track-list>'
        });
        $routeProvider.when('/artist/:idArtist', {
          template: '<artist></artist>'
        });
        $routeProvider.when('/top', {
          template: '<top-track-list></top-track-list>'
        });
         $routeProvider.when('/upload', {
          template: '<track-creator></track-creator>'
        });
          $routeProvider.when('/donation', {
          template: '<donation></donation>'
        });
        $routeProvider.when('/user/pass/restore/:username', {
          template: '<restore-password></restore-password>'
        });
        $routeProvider.otherwise({redirectTo: '/'});
        $httpProvider.interceptors.push('notifierInterceptor');
      }]
  });
})(window, document);
