from django.conf.urls import url
from .views import (
    TrackListView, TrackCreateView, register_rate_track, trace, Top10,
    GenderListView, TrackForArtisticListView, PlaylistCreateView,
    PlaylistListView, add_track_playlist
)

urlpatterns = [
    url(r'^$', TrackListView.as_view(), name='track-list'),
    url(r'^for_artistic/(?P<artist_id>\d+)/$',
        TrackForArtisticListView.as_view(),
        name='for_artistic-list'),
    url(r'^rate_track/$', register_rate_track, name='rate_track'),
    url(r'^create/$', TrackCreateView.as_view(), name='track-create'),
    url(r'^trace', trace, name="trace"),
    url(r'^top10/$', Top10.as_view(), name='top10'),
    url(r'^gender', GenderListView.as_view(), name="gender-list-api"),
    url(r'^playlist-create/$', PlaylistCreateView.as_view(),
        name='playlist-create'),
    url(r'^playlist-list/(?P<user_id>\d+)/$', PlaylistListView.as_view(),
        name='playlist-list'),
    url(r'^playlist-add', add_track_playlist, name='playlist-add'),
]
