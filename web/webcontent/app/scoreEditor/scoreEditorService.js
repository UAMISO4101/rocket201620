var scoreEditorModule = angular.module('scoreEditorModule');
scoreEditorModule.factory('scoreEditorService', ['$freevenModal', 'TracksApiService',
    function ($freevenModal, TracksApiService) {
        var scoreEditorService = function () {
            var self = this;
            self.user = {};
            this.showScoreEditorPopup = function (idTrack) {
                self.idTrack = idTrack;
                $freevenModal.showPopup({}, {
                    template: '<score-editor title ="scoreEditor"> </score-editor>',
                    windowClass: 'score-editor-modal'
                });
            };

            this.closeModal = function () {
                $freevenModal.closePopup();
            };

            this.setScoreValue = function (value) {
                var self = this;
                self.loading = true;
                TracksApiService.setScoreTrack(
                    {
                        value: value,
                        idTrack: self.idTrack
                    },
                    function (response) {
                        self.loading = false;
                        console.log('Pista calificada');
                    },
                    function (error) {
                        console.log('Error loading tracks');
                    });
                self.closeModal();
            };

        };
        return new scoreEditorService();
    }]);
