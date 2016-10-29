var playerModule = angular.module('playerModule');
playerModule.factory('playerService', ['ngAudio',
    function (ngAudio) {
        var PlayerService = function () {
            var self = this;
            self.audio = null;
            self.currentNum = 0;

            // tell audio element to play/pause, you can also use $scope.audio.play() or $scope.audio.pause();
            self.playpause = function () {
                var self = this;
                var a = self.audio.paused ? self.audio.play() : self.audio.pause();
            };

            self.playTrack = function (track) {
                if (self.audio) {
                    self.audio.pause();
                }
                self.audio = ngAudio.load(track.url);
                self.audio.play();
                self.track = track;
            };
            self.showPlayer = function () {
                return self.audio != null
            };
        };
        return new PlayerService();
    }]);
