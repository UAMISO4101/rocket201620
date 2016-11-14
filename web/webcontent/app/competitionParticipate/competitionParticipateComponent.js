var competitionParticipateModule = angular.module('competitionParticipateModule');
var CompetitionParticipateController = ['$i18n', '$freevenModal', 'mainService', 'Upload', 'notifierService',
    'competitionListService', 'CompetitionApiService', 'ArtistApiService',
    function ($i18n, $freevenModal, mainService, Upload, notifierService, competitionListService,
              CompetitionApiService, ArtistApiService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;

        self.idCompetition = competitionListService.getSelectedIdCompetition();

        self.participateValidate = function () {
            self.uploadFileToParticipate();
        }
        self.trackFiles = {};
        self.loading = false;
        self.itemsSelected = [];
        self.tracksSelected = [];

        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.trackFiles[fieldName] = file;
            }
        };

        self.uploadFileToParticipate = function () {
            var self = this;
            var user = mainService.getUserData();
            self.loading = true;
            console.log(self.itemsSelected);
            if (self.trackFiles) {
                Upload.upload({
                    url: 'api/announcement/participate/',
                    data: {
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

        self.loadFullCompetition = function (id) {
            if (id != undefined) {
                CompetitionApiService.getCompetition(
                    {guidCompetition: id},
                    function (response) {
                        self.items = response.results[0].items;
                    },
                    function (error) {
                        console.log('Error loading full competition');
                    });
            }

        };

        self.loadFullCompetition(self.idCompetition);


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
