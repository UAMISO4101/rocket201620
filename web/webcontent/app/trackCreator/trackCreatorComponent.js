var trackCreatorModule = angular.module('trackCreatorModule');
var TrackCreatorController = ['Upload', 'mainService', 'GenderApiService', 'notifierService', '$scope',
    function (Upload, mainService, GenderApiService, notifierService, $scope) {
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
        self.loadGenders = function () {
            var self = this;
            GenderApiService.getGenders(
                {}
                ,
                function (response) {
                    console.log(response);
                    self.genderOptions = response.results;
                },
                function (error) {

                });
        };

        self.imageIsLoaded = function (e) {
            var img = {};
            $scope.$apply(function () {
                img = {"img": e.target.result};
                self.picture.push(img);
            });
        };


        self.uploadFilesAndData = function () {
            var self = this;
            var user = mainService.getUserData();
            if (self.trackFiles) {
                Upload.upload({
                    url: 'api/track/create/',
                    data: {
                        name: self.name,
                        description: self.description,
                        gender: self.gender,
                        artist: user.id_artist,
                        image: self.trackFiles.image,
                        file: self.trackFiles.audio,
                        score: 0
                    }
                }).progress(function (evt) {
                }).success(function (data, status, headers, config) {
                    console.log('subido correctamente');
                    notifierService.success("La pieza musical se ha creado correctamente", ".");
                });
            }
        };
        self.loadGenders();
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
