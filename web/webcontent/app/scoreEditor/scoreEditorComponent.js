var scoreEditorModule = angular.module('scoreEditorModule');
var ScoreEditorController = ['scoreEditorService',
    function (scoreEditorService) {
        /**
         * Tip: add here only visual logic
         */
        var self = this;
        self.setValue = function (value) {
            scoreEditorService.setScoreValue(value);
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
