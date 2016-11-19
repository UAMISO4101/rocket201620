describe('Module to test: competitionDetail', function () {
   var element;
    beforeEach(module('competitionDetailModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('competitionDetail directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<competition-detail></competition-detail>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('competitionDetail Controller', function () {
        var _competitionDetailController;
        beforeEach(function() {
            _competitionDetailController = element.controller('competitionDetail');
        });
        it('should be Defined', inject(function () {
            expect(_competitionDetailController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('competitionDetail Service', function () {

    });
});
