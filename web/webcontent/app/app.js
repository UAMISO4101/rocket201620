require('./dependencies.js');
var appConfiguration;
var appModules = [
    'ngCookies',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngRoute',
    'restAPIModule',
    'i18nModule',
    'notifierModule',
    'splashModule',
    'commonDirectivesModule',
    'mainModule',
    'trackListModule',
    'playerPictureModule',
    'userPanelModule',
    'userMenuModule',
    'searchModule',
    'playerModule',
    'loginModule',
    'userRegisterModule'
];

appConfiguration = appConfigurations.productionConfiguration;

angular.module('freevenApp', appModules, appConfiguration);
angular.bootstrap(document, ['freevenApp']);
