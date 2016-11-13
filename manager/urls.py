from django.conf.urls import url
from django.contrib.auth import views as auth_views
from .views import (IndexView, GenderListView, GenderUpdateView,
                    GenderCreateView, BusinessAgentListView,
                    businessAgentCreate, businessAgentUpdate, UserListView,
                    UserUpdateView, ArtistDonationListView)


urlpatterns = [
    url(
        r'^login/$',
        auth_views.login,
        {
            'template_name': 'login.html'
        },
        name='login_manager',
    ),
    url(
        '^logout/',
        auth_views.logout,
        {'template_name': 'login.html'},
        name='logout',
    ),
    url(r'^$', IndexView.as_view(), name='manager'),
    url(r'^gender/$', GenderListView.as_view(), name='gender-list'),
    url(r'^gender/create/$', GenderCreateView.as_view(), name='gender-create'),
    url(r'^gender/update/(?P<pk>\d+)/$', GenderUpdateView.as_view(),
        name='gender-update'),
    url(r'^agent/$', BusinessAgentListView.as_view(), name='agent-list'),
    url(r'^agent/create/$', businessAgentCreate, name='agent-create'),
    url(r'^agent/update/(?P<pk>\d+)/$', businessAgentUpdate,
        name='agent-update'),
    url(r'^user/$', UserListView.as_view(), name='user-list'),
    url(r'^user/update/(?P<pk>\d+)/$', UserUpdateView.as_view(),
        name='user-update'),
    url(r'^artist-donation-list/$', ArtistDonationListView.as_view(),
        name='artist-donation-list'),    
]
