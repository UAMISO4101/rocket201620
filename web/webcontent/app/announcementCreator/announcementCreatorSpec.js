describe('Module to test: announcementCreator', function () {
   var element;
    beforeEach(module('announcementCreatorModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('announcementCreator directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<announcement-creator></announcement-creator>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('announcementCreator Controller', function () {
        var _announcementCreatorController;
        beforeEach(function() {
            _announcementCreatorController = element.controller('announcementCreator');
        });
        it('should be Defined', inject(function () {
            expect(_announcementCreatorController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('announcementCreator Service', function () {

    });
});
