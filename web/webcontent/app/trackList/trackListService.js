var trackListModule = angular.module('trackListModule');
trackListModule.factory('trackListService', ['TracksApiService', 'playerService',
    function (TrackApiService, playerService) {
        var TrackListService = function () {
            var self = this;
            self.selectedTrack = {};
            self.loading = false;
            self.loadTracks = function (params) {
                params.format = "json";
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
                TrackApiService.loadTopTracks(
                    params,
                    function (response) {
                        self.loading = false;
                        self.tracks = response.results;
                    },
                    function (error) {
                        console.log('Error loading tracks');
                    });
            };
            self.nextPage = function () {
                var params = {};
                params.format = "json";
                self.loading = true;
                self.busy = true;
                TrackApiService.searchTracks(
                    params,
                    function (response) {
                        self.loading = false;
                        self.busy = false;
                        if (response.results.length > 0) {
                            self.tracks = self.tracks.concat(response.results);
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
                if (self.tracks.length > 0) {
                    playerService.playTrack(self.tracks[0]);
                }
            };

            self.next = function () {
                //todo: obtain next in the list
                var nexTrack = {};
                self.playSelected();
            };

            self.prev = function () {
                //todo: obtain prev in the list
                var prevTrack = {};
                self.playSelected();
            };
        };
        return new TrackListService();
    }]);
