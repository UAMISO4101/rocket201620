/**
 * Created by diego on 8/10/2016.
 */

var competitionListModule = angular.module('competitionListModule');
competitionListModule.factory('competitionListService', ['UserApiService', '$i18n', '$freevenModal', 'notifierService',
    'mainService', '$cookieStore',
    function (UserApiService, $i18n, $freevenModal, notifierService, mainService, $cookieStore) {
        var competitionListService = function () {

            var self = this;

            self.competitions = [];

            self.works = [];

            self.competition = {};
            self.competition2 = {};

            self.work1 = {};
            self.work2 = {};

            self.loading = false;

            self.listCompetitions = function () {
                self.competitions = [];
                self.works = [];

                self.loadMockData();

            };

            self.showLoadTrackPopup = function (id) {
                var self = this;
                self.selectedIdCompetition = id
                $freevenModal.showPopup({}, {
                    size: 'small',
                    template: '<competition-participate></competition-participate>'
                });
            };

            self.getSelectedIdCompetition = function () {
                var self = this;
                return self.selectedIdCompetition;
            };

            self.loadMockData = function () {
                //Load works
                self.work1.workName = "Sólo guitarra";
                self.work1.typeWork = "Instrumento";
                self.work1.feature = "Máximo puede durar 1 minuto.";


                self.work2.workName = "Sólo piano";
                self.work2.typeWork = "Instrumento";
                self.work2.feature = "Se debe enviar en formato mp3, 30 segundos.";

                self.works.push(self.work1);
                self.works.push(self.work2);

                self.competition.competitionName = "Convocatoria para pélicula Salvaje";
                self.competition.competittionId = 1;
                self.competition.date_competition_start = new Date();
                self.competition.date_competition_dead_line = new Date();
                self.competition.competitionDescription = "Necesitamos sonidos de animales para la pelicula";
                self.competition.works = self.works;

                self.competition2.competitionName = "Convocatoria para pélicula de niños";
                self.competition2.competittionId = 2;
                self.competition2.date_competition_start = new Date();
                self.competition2.date_competition_dead_line = new Date();
                self.competition2.competitionDescription = "Necesitamos sonidos de niños llorando para la pelicula";
                self.competition2.works = self.works;


                self.competitions.push(self.competition);
                self.competitions.push(self.competition2);

            }


        };
        return new competitionListService();
    }]);
