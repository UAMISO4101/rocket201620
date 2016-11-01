describe('Module to test: trackCreator', function () {
   var element;
    beforeEach(module('trackCreatorModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('trackCreator directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<track-creator></track-creator>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('trackCreator Controller', function () {
        var _trackCreatorController;
        beforeEach(function() {
            _trackCreatorController = element.controller('trackCreator');
        });
        it('should be Defined', inject(function () {
            expect(_trackCreatorController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('trackCreator Service', function () {

    });
});
