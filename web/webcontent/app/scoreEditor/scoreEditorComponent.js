var scoreEditorModule = angular.module('scoreEditorModule');
var ScoreEditorController = ['scoreEditorService',
    function (scoreEditorService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.scoreEditorService = scoreEditorService;
        self.setValue = function (value) {
            self.score = value;
        };

        self.greaterThanOrEqual = function (value) {
            if (self.score) {
                return self.score >= value;
            }
            return false;
        };
        self.close = function () {
            scoreEditorService.closeModal();
        };

        self.save = function () {
            scoreEditorService.setScoreValue(self.score);
            scoreEditorService.closeModal();
        };

    }];

scoreEditorModule.component('scoreEditor', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: ScoreEditorController,
    controllerAs: 'ctrl',
    template: require('./scoreEditor.html')
});
