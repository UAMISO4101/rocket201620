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
    url(r'^update_profile/$', views.update_profile,
        name='update_profile'),
    url(r'^login/$', views.login_user, name='login'),
    url(r'^donate/$', views.Donate.as_view(), name='donate'),
    url(r'^donation-list/$', views.DonationList.as_view(), name='donate'),
    url(r'^request_password_restore/$', views.request_password_restore,
        name='request_password_restore'),
    url(r'^change_password/$', views.change_password, name='change_password'),
]
