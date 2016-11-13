from django.conf.urls import url
from .views import (AnnouncementListView, AnnouncementCreateView,
                    ItemCreateView, AnnouncementUpdateView, ItemUpdateView)


urlpatterns = [
    url(r'^$', AnnouncementListView.as_view(), name='anct-list'),
    url(r'^create/$', AnnouncementCreateView.as_view(), name='anct-create'),
    url(r'^item-create/$', ItemCreateView.as_view(), name='item-create'),
    url(r'^update/(?P<pk>\d+)/$', AnnouncementUpdateView.as_view(),
        name='anct-update'),
    url(r'^item-update/(?P<pk>\d+)/$', ItemUpdateView.as_view(),
        name='item-update'),
]
