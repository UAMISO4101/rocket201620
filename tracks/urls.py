from django.conf.urls import url
from .views import TrackListView

urlpatterns = [
    url(r'^', TrackListView.as_view(), name='track-list'),
]
