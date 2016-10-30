from django.conf.urls import url
from .views import TrackListView, register_rate_track

urlpatterns = [
    url(r'^$', TrackListView.as_view(), name='track-list'),
    url(r'^rate_track/$', register_rate_track, name='rate_track'),
]
