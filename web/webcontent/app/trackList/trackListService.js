var trackListModule = angular.module('trackListModule');
trackListModule.factory('trackListService', ['TracksApiService', 'playerService',
    function (TrackApiService, playerService) {
        var TrackListService = function () {
            var self = this;
            self.selectedTrack = {
                "id": "20380a36-8777-43f7-a79e-65bdb53f4625",
                "name": "My_Chemical_Romance",
                "description": "My_Chemical_Romance",
                "gender": "gendername2",
                "image": "imageurl",
                "url": "https://freeven.s3.amazonaws.com/media/tracks/My_Chemical_Romance_-_I_am_not_OK.mp3",
                "score": 3
            };
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
                            self.tracks.push(response.results);
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
