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
            self.goToParticipate();
        }
        self.trackFiles = {};
        self.loading = false;
        self.itemsSelected = {};
        self.tracksSelected = [];
        self.participateData = {};

        self.filters = [];

        self.attachFile = function (files, fieldName) {
            if (files && files.length > 0) {
                var file = files[0];
                self.trackFiles[fieldName] = file;
            }
        };

        self.goToParticipate = function () {
            var self = this;
            var user = mainService.getUserData();
            self.tracksSelected = self.filters;
            self.loading = true;
            self.createRelationItemTrack();

        };

        self.loadFullCompetition = function (id) {

            if (id != undefined) {
                self.participateData.IdCompetition = id;
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

        self.loadFullTracksArtist = function (id) {

            if (id != undefined) {
                ArtistApiService.getTracksForArtist(
                    {guidArtist: id},
                    function (response) {
                        self.tracksArtist = response.results;
                    },
                    function (error) {
                        console.log('Error loading full tracks artist');
                    });
            }

        };

        self.createRelationItemTrack = function () {
            var self = this;
            var relations = [];
            for (var i = 0; i < self.items.length; i++) {
                var relation = {};
                relation.idItem = self.items[i].id;
                relation.idTrack = self.items[i].track.id;
                relations.push(relation);
            }
            self.participateData.relations = relations;
            console.log(self.participateData);

        };

        self.loadFullCompetition(self.idCompetition);
        self.loadFullTracksArtist(mainService.getArtistId());


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
