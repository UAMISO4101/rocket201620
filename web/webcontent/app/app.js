require('./dependencies.js');
var appConfiguration;
var appModules = [
    'ngCookies',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngRoute',
    'restAPIModule',
    'i18nModule',
    'masonry',
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
    'userRegisterModule',
    'trackModule',
    'userEditModule',
    'helpModule'
];

appConfiguration = appConfigurations.productionConfiguration;

angular.module('freevenApp', appModules, appConfiguration);
angular.bootstrap(document, ['freevenApp']);
