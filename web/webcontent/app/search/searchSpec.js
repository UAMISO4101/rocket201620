describe('Module to test: search', function () {
   var element;
    beforeEach(module('searchModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('search directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<search></search>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('search Controller', function () {
        var _searchController;
        beforeEach(function() {
            _searchController = element.controller('search');
        });
        it('should be Defined', inject(function () {
            expect(_searchController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('search Service', function () {

    });
});
