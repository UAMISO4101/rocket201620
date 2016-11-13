describe('Module to test: competitionParticipate', function () {
   var element;
    beforeEach(module('competitionParticipateModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('competitionParticipate directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<competition-participate></competition-participate>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('competitionParticipate Controller', function () {
        var _competitionParticipateController;
        beforeEach(function() {
            _competitionParticipateController = element.controller('competitionParticipate');
        });
        it('should be Defined', inject(function () {
            expect(_competitionParticipateController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('competitionParticipate Service', function () {

    });
});
