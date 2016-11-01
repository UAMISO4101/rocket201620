describe('Module to test: scoreEditor', function () {
   var element;
    beforeEach(module('scoreEditorModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('scoreEditor directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<score-editor></score-editor>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('scoreEditor Controller', function () {
        var _scoreEditorController;
        beforeEach(function() {
            _scoreEditorController = element.controller('scoreEditor');
        });
        it('should be Defined', inject(function () {
            expect(_scoreEditorController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('scoreEditor Service', function () {

    });
});
