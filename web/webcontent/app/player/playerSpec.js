describe('Module to test: player', function () {
   var element;
    beforeEach(module('playerModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('player directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<player></player>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('player Controller', function () {
        var _playerController;
        beforeEach(function() {
            _playerController = element.controller('player');
        });
        it('should be Defined', inject(function () {
            expect(_playerController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('player Service', function () {

    });
});
