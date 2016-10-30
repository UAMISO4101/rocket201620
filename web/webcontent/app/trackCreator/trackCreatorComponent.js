var trackCreatorModule = angular.module('trackCreatorModule');
var TrackCreatorController = ['Upload',
    function (Upload) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.uploadFile = function (files) {
        //todo: filter  only .bex  files
        if (files && files.length > 0) {
            var file = files[0];
            Upload.upload({
                url: 'api/track/upload',
                fields: {},
                file: file
            }).progress(function (evt) {
            }).success(function (data, status, headers, config) {
                console.log('subido correctamente');
            });
        }
    };
}];

trackCreatorModule.component('trackCreator', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: TrackCreatorController,
    controllerAs: 'ctrl',
    template: require('./trackCreator.html')
});
