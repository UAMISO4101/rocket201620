describe('Module to test: donationCreator', function () {
   var element;
    beforeEach(module('donationCreatorModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('donationCreator directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<donation-creator></donation-creator>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('donationCreator Controller', function () {
        var _donationCreatorController;
        beforeEach(function() {
            _donationCreatorController = element.controller('donationCreator');
        });
        it('should be Defined', inject(function () {
            expect(_donationCreatorController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('donationCreator Service', function () {

    });
});
