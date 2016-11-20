var trackListModule = angular.module('trackListModule');
trackListModule.factory('trackListService', ['TracksApiService', 'playerService', 'mainService', 'notifierService',
    function (TrackApiService, playerService, mainService, notifierService) {
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
            localStorage.playListPairs = [];
            self.addToPlayList = function (track, playList) {
                var self = this;
                var user = mainService.getUserData();
                var pairKey = "playListKey_" + user.id_user + "_" + track.id + "_" + playList.id;
                if (localStorage[pairKey]) {
                    notifierService.info("La Obra " + track.name, "ya se ha agregado previamente a <b>" + playList.name + "</b>");
                } else {
                    localStorage[pairKey] = true;
                    TrackApiService.addToPlayList(
                        {},
                        {
                            idList: playList.id,
                            idTrack: track.id
                        },
                        function (response) {
                            notifierService.info("La Obra " + track.name, "Se agregó correctamente a la lista <b>" + playList.name + "</b>");
                        },
                        function (error) {
                            console.log('Error loading playList');
                        });
                }

            };

            self.loadPlayList = function () {
                var user = mainService.getUserData();
                TrackApiService.listPlayList(
                    {userId: user.id_user || 0},
                    {},
                    function (response) {
                        self.playLists = response.results;
                    },
                    function (error) {
                        console.log('Error loading playList');
                    });
            };
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
            self.loadPlayList();
        };
        return new TrackListService();
    }]);
