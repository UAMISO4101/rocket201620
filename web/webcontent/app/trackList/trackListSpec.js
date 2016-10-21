describe('Module to test: trackList', function () {
   var element;
    beforeEach(module('trackListModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('trackList directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<track-list></track-list>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('trackList Controller', function () {
        var _trackListController;
        beforeEach(function() {
            _trackListController = element.controller('trackList');
        });
        it('should be Defined', inject(function () {
            expect(_trackListController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('trackList Service', function () {

    });
});
