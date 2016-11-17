var announcementCreatorModule = angular.module('announcementCreatorModule');
var AnnouncementCreatorController = ['Upload', 'mainService',
    function (Upload, mainService) {
        var self = this;
        self.files = {};
        self.loading = false;
        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.files[fieldName] = file;
            }
        };

        self.uploadFilesAndData = function () {
            var self = this;
            var user = mainService.getUserData();
            self.loading = true;
            if (self.files) {
                Upload.upload({
                    url: 'announcement/create/',
                    data: {
                        name: self.name,
                        description: self.description,
                        start_date: "2016-01-02",
                        end_date: "2016-05-02",
                        image: self.files.image,
                        popular_selection: true,
                        open: true,
                        owner: user.id_agent || 1,
                        score: 0
                    }
                }).progress(function (evt) {
                }).success(function (data, status, headers, config) {
                    self.loading = false;
                    console.log('subido correctamente');
                    notifierService.success("La convocatoria se ha creado correctamente", ".");
                });
            }
        };
    }];

announcementCreatorModule.component('announcementCreator', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: AnnouncementCreatorController,
    controllerAs: 'ctrl',
    template: require('./announcementCreator.html')
});
