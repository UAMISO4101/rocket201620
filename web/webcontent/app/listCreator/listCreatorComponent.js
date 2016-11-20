var  listCreatorModule = angular.module('listCreatorModule');
var ListCreatorController = ['listCreatorService', function (listCreatorService) {
    var self = this;
    self.list = {};
    self.close = function () {
        listCreatorService.closeCreatorPopup();
    };
    self.create = function(){
        var self = this;
        listCreatorService.create(self.list);
    }
}];

listCreatorModule.component('listCreator', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: ListCreatorController,
    controllerAs: 'ctrl',
    template: require('./listCreator.html')
});
