describe('Module to test: competitionList', function () {
   var element;
    beforeEach(module('competitionListModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('competitionList directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<competition-list></competition-list>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('competitionList Controller', function () {
        var _competitionListController;
        beforeEach(function() {
            _competitionListController = element.controller('competitionList');
        });
        it('should be Defined', inject(function () {
            expect(_competitionListController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('competitionList Service', function () {

    });
});
