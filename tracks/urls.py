from django.conf.urls import url
from .views import TrackListView,TrackCreateView,register_rate_track

urlpatterns = [
    url(r'^', TrackListView.as_view(), name='track-list'),
    url(r'^rate_track/$', register_rate_track, name='rate_track'),
    url(r'^create/$', TrackCreateView.as_view(), name='track-create'),
]
