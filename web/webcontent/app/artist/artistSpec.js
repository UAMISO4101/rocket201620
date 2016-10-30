describe('Module to test: artist', function () {
   var element;
    beforeEach(module('artistModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('artist directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<artist></artist>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('artist Controller', function () {
        var _artistController;
        beforeEach(function() {
            _artistController = element.controller('artist');
        });
        it('should be Defined', inject(function () {
            expect(_artistController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('artist Service', function () {

    });
});
