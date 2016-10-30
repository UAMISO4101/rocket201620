from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.user, name='user'),
    url(r'^$/(?P<guid_user>[^/]+)/$',
        views.user,
        name='user'
        ),
    url(
        r'^artist/(?P<pk>\d+)',
        views.ArtistRetrieveView.as_view(),
        name='artist-detail'
    ),
    url(r'^login/$', views.login_user, name='login'),
    url(r'^donate/$', views.Donate.as_view(), name='donate'),
    url(r'^donation-list/$', views.DonationList.as_view(), name='donate'),
]
