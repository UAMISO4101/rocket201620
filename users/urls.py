from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.user, name='user'),
    url(r'^$/(?P<guid_user>[^/]+)/$',
        views.user,
        name='user'
        ),
    url(r'^login_user/$', views.login_user, name='login_user'),
]
