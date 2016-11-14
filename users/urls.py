from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.user, name='user'),
    url(r'^$/(?P<guid_user>[^/]+)/$',
        views.user,
        name='user'
        ),
    url(
        r'^artist/(?P<pk>\d+)/$',
        views.ArtistRetrieveView.as_view(),
        name='artist-detail'
    ),
    url(r'^update_profile', views.update_profile,
        name='update_profile'),
    url(r'^login/$', views.login_user, name='login'),
    url(r'^donate', views.Donate.as_view(), name='donate'),
    url(r'^donation-list/$', views.DonationList.as_view(),
        name='donation-list'),
    url(r'^request_password_restore/$', views.request_password_restore,
        name='request_password_restore'),
    url(r'^change_password/$', views.change_password, name='change_password'),
    url(r'^change_password_op/$', views.change_password_op,
        name='change_password_op'),
    url(
        r'^user-detail/(?P<pk>\d+)/$',
        views.UserRetrieveView.as_view(),
        name='user-detail'
    ),
    url(
        r'^artist-update/(?P<pk>\d+)/$',
        views.ArtistUpdateView.as_view(),
        name='artist-update'
    ),
    url(r'^event-list/$', views.EventListView.as_view(), name='event-list'),
    url(r'^event-create/$', views.EventCreateView.as_view(),
        name='event-create'),
    url(r'^event-update/(?P<pk>\d+)/$', views.EventUpdateView.as_view(),
        name='event-update'),
]
