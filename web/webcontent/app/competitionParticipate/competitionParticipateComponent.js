var competitionParticipateModule = angular.module('competitionParticipateModule');
var CompetitionParticipateController = ['$i18n', '$freevenModal', 'mainService', 'Upload', 'notifierService',
    'competitionListService',
    function ($i18n, $freevenModal, mainService, Upload, notifierService,competitionListService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.participateValidate = function () {
            self.uploadFileToParticipate();
        }
        self.trackFiles = {};
        self.loading = false;
        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.trackFiles[fieldName] = file;
            }
        };

        self.uploadFileToParticipate = function () {
            var self = this;
            var user = mainService.getUserData();
            self.idCompetition = competitionListService.getSelectedIdCompetition();
            self.loading = true;
            if (self.trackFiles) {
                Upload.upload({
                    url: 'api/announcement/participate/',
                    data: {
                        idCompetition: self.idCompetition,
                        artist: user.id_artist,
                        file: self.trackFiles.audio
                    }
                }).progress(function (evt) {
                }).success(function (data, status, headers, config) {
                    self.loading = false;
                    self.close();
                    console.log('Enviado a convocatoria correctamente');
                    notifierService.success("La pieza musical se ha sido enviada para participar", ".");
                });
            }
        };


        self.close = function () {
            $freevenModal.closePopup();
        };

    }];

competitionParticipateModule.component('competitionParticipate', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: CompetitionParticipateController,
    controllerAs: 'ctrl',
    template: require('./competitionParticipate.html')
});
