from django.conf.urls import url
from django.contrib.auth import views as auth_views
from .views import (IndexView, GenderListView, GenderUpdateView,
                    GenderCreateView, BusinessAgentListView,
                    BusinessAgentCreateView, BusinessAgentUpdateView)


urlpatterns = [
    url(
        r'^login/$',
        auth_views.login,
        {
            'template_name': 'login.html'
        },
        name='login',
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
    url(r'^agent/create/$', BusinessAgentCreateView.as_view(),
        name='agent-create'),
    url(r'^agent/update/(?P<pk>\d+)/$', BusinessAgentUpdateView.as_view(),
        name='agent-update'),
]
