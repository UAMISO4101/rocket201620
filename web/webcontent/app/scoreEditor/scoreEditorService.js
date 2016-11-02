var scoreEditorModule = angular.module('scoreEditorModule');
scoreEditorModule.factory('scoreEditorService', ['$freevenModal', 'TracksApiService', 'mainService',
    function ($freevenModal, TracksApiService, mainService) {
        var scoreEditorService = function () {
            var self = this;
            self.user = {};
            this.showScoreEditorPopup = function (track) {
                self.track = track;
                $freevenModal.showPopup({}, {
                    template: '<score-editor title ="scoreEditor"> </score-editor>'
                    //windowClass: 'score-editor-modal'
                });
            };

            this.closeModal = function () {
                $freevenModal.closePopup();
            };

            this.setScoreValue = function (value) {
                var self = this;
                self.loading = true;
                var user = mainService.getUserData();
                //self.track.score = value;
                TracksApiService.setScoreTrack(
                    {
                        username: user.username,
                        track_id: self.track.id,
                        rate: value
                    },
                    function (response) {
                        self.loading = false;
                    },
                    function (error) {
                        console.log('Error loading tracks');
                    });
            };

        };
        return new scoreEditorService();
    }]);
