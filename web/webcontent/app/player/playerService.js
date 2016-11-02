var playerModule = angular.module('playerModule');
playerModule.factory('playerService', ['ngAudio', 'TracksApiService', 'mainService',
    function (ngAudio, TracksApiService, mainService) {
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
                self.traceTrack(track);
            };
            self.showPlayer = function () {
                return self.audio != null
            };

            self.traceTrack = function (track) {
                var user = mainService.getUserData();
                if (user) {//only if the user is authenticated
                    TracksApiService.traceTrack(
                        {
                            user: user.username,
                            track: track.id,
                            artist: track.artist_id,
                            action: 'play'
                        },
                        function (response) {

                        },
                        function (error) {
                            console.log('Error loading tracks');
                        });
                }

            };
        };
        return new PlayerService();
    }]);
