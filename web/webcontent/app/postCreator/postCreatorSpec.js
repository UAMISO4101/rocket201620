describe('Module to test: postCreator', function () {
   var element;
    beforeEach(module('postCreatorModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('postCreator directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<post-creator></post-creator>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('postCreator Controller', function () {
        var _postCreatorController;
        beforeEach(function() {
            _postCreatorController = element.controller('postCreator');
        });
        it('should be Defined', inject(function () {
            expect(_postCreatorController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('postCreator Service', function () {

    });
});
