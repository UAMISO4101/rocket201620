from django.conf.urls import url
from .views import TrackListView, TrackCreateView

urlpatterns = [
    url(r'^$', TrackListView.as_view(), name='track-list'),
    url(r'^create/$', TrackCreateView.as_view(), name='track-create'),
]
