describe('Module to test: topTrackList', function () {
   var element;
    beforeEach(module('topTrackListModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('topTrackList directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<top-track-list></top-track-list>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('topTrackList Controller', function () {
        var _topTrackListController;
        beforeEach(function() {
            _topTrackListController = element.controller('topTrackList');
        });
        it('should be Defined', inject(function () {
            expect(_topTrackListController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('topTrackList Service', function () {

    });
});
