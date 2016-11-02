describe('Module to test: playerPicture', function () {
   var element;
    beforeEach(module('playerPictureModule'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('playerPicture directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<player-picture></player-picture>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('playerPicture Controller', function () {
        var _playerPictureController;
        beforeEach(function() {
            _playerPictureController = element.controller('playerPicture');
        });
        it('should be Defined', inject(function () {
            expect(_playerPictureController).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('playerPicture Service', function () {

    });
});
