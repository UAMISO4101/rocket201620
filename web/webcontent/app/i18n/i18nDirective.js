var i18nModule = angular.module('i18nModule');
i18nModule.controller('I18nController', ['$i18n', function ($i18n) {
    var vm = this;
    vm.$i18n = $i18n;
}]);

i18nModule.directive('rI18n', [function () {
    return {
        restrict: 'E',
        scope: {},
        controller: 'I18nController',
        controllerAs: 'ctrl',
        template: require('./i18n.html')
    };
}]);
