var playerModule = angular.module('playerModule');
playerModule.factory('playerService', [
    function () {
        var PlayerService = function () {
            var self = this;
            self.audio = new Audio();
            self.currentNum = 0;

            // tell audio element to play/pause, you can also use $scope.audio.play() or $scope.audio.pause();
            self.playpause = function () {
                var self = this;
                var a = self.audio.paused ? self.audio.play() : self.audio.pause();
            };

            self.playTrack = function (track) {
                //self.audio.src = 'https://freeven.s3.amazonaws.com' + track.url;
                self.audio.src = track.url;
                self.audio.play();
                self.track = track;
            };

        };
        return new PlayerService();
    }]);
