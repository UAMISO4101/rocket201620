from django.conf.urls import url
from .views import TrackListView, trace, Top10

urlpatterns = [
    url(r'^$', TrackListView.as_view(), name='track-list'),
    url(r'^trace/', trace),
    url(r'^top10/', Top10.as_view(), name='top10'),
]
