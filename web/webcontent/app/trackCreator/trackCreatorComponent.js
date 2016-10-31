var trackCreatorModule = angular.module('trackCreatorModule');
var TrackCreatorController = ['Upload',
    function (Upload) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.trackFiles = {};
        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.trackFiles[fieldName] = file;
            }
        };
        self.uploadFilesAndData = function () {
            var self = this;
            if (self.trackFiles) {
                Upload.upload({
                    url: 'api/track/upload',
                    fields: {
                        trackName: self.trackName
                    },
                    files: self.trackFiles
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
