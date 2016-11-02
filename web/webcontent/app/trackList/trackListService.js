var trackListModule = angular.module('trackListModule');
trackListModule.factory('trackListService', ['TracksApiService', 'playerService',
    function (TrackApiService, playerService) {
        var TrackListService = function () {
            var self = this;
            self.selectedTrack = {};
            self.loading = false;
            self.currentOffset = 0;
            self.params = {
                format: "json",
                offset: 0
            };
            self.tracks = [];
            self.indexTrack = 0;
            self.loadTracks = function (params) {
                var self = this;
                self.loading = true;
                TrackApiService.searchTracks(
                   params,
                    function (response) {
                        self.loading = false;
                        self.tracks = response.results;
                    },
                    function (error) {
                        console.log('Error loading tracks');
                    });
            };

            self.loadTopTracks = function () {
                var params = {
                    format: "json"
                };
                self.loading = true;
                self.topTracks = [];
                TrackApiService.loadTopTracks(
                    params,
                    function (response) {
                        self.loading = false;
                        for (var i = 0; i < response.results.length; i++) {
                            var track = response.results[i];
                            track.position = i + 1;
                            self.topTracks.push(track)
                        }
                    },
                    function (error) {
                        console.log('Error loading tracks');
                    });
            };
            self.nextPage = function () {
                self.loading = true;
                self.busy = true;
                TrackApiService.searchTracks(
                    self.params,
                    function (response) {
                        self.loading = false;
                        self.busy = false;
                        if (response.results.length > 0) {
                            self.tracks = self.tracks.concat(response.results);
                            self.params.offset += 10;
                        }
                        else {
                            self.empty = self.tracks.length <= 0;
                        }
                    },
                    function (error) {
                        self.busy = false;
                        console.log('Error loading tracks');
                    });
            };
            self.playSelected = function (track) {
                self.selectedTrack = track;
                playerService.playTrack(track);
            };

            self.playFirstTrack = function () {
                var self = this;
                if (self.tracks && self.tracks.length > 0) {
                    playerService.playTrack(self.tracks[0]);
                }
            };

            self.next = function () {
                if (self.indexTrack <= self.tracks.length - 2) {
                    self.indexTrack += 1;
                    var nexTrack = self.tracks[self.indexTrack];
                    self.playSelected(nexTrack);
                }
            };

            self.prev = function () {
                if (self.indexTrack >= 1) {
                    self.indexTrack -= 1;
                    var prevTrack = self.tracks[self.indexTrack];
                    self.playSelected(prevTrack);
                }
            };
        };
        return new TrackListService();
    }]);
