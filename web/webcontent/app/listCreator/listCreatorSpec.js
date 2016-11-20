describe('Module to test: listCreator', function () {
   var element;
    beforeEach(module('listCreatorModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('listCreator directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<list-creator></list-creator>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('listCreator Controller', function () {
        var _listCreatorController;
        beforeEach(function() {
            _listCreatorController = element.controller('listCreator');
        });
        it('should be Defined', inject(function () {
            expect(_listCreatorController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('listCreator Service', function () {

    });
});
