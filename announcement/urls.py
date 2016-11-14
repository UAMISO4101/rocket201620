from django.conf.urls import url
from .views import (AnnouncementListView, AnnouncementCreateView,
                    ItemCreateView, AnnouncementUpdateView, ItemUpdateView,
                    AnnouncementCompleteListView, VoteListView, VoteCreateView,
                    VoteUpdateView, ParticipateUpdateView)


urlpatterns = [
    url(r'^$', AnnouncementListView.as_view(), name='anct-list'),
    url(r'^full/(?P<pk>\d+)/$', AnnouncementCompleteListView.as_view(),
        name='anctc-list'),
    url(r'^create/$', AnnouncementCreateView.as_view(), name='anct-create'),
    url(r'^item-create/$', ItemCreateView.as_view(), name='item-create'),
    url(r'^update/(?P<pk>\d+)/$', AnnouncementUpdateView.as_view(),
        name='anct-update'),
    url(r'^item-update/(?P<pk>\d+)/$', ItemUpdateView.as_view(),
        name='item-update'),
    url(r'^vote-get/(?P<item>\d+)/(?P<user>\d+)/$',
        VoteListView.as_view(),
        name='vote-get'),
    url(r'^vote-create/$', VoteCreateView.as_view(),
        name='vote-create'),
    url(r'^vote-update/(?P<item>\d+)/(?P<user>\d+)/$',
        VoteUpdateView.as_view(),
        name='vote-update'),
    url(r'^participate/(?P<pk>\d+)/$', ParticipateUpdateView.as_view(),
        name='anct-participate'),
]
