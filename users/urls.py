from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.user, name='user'),
    url(r'^$/(?P<guid_user>[^/]+)/$',
        views.user,
        name='user'
        ),
    url(r'^login/$', views.login_user, name='login'),
    url(r'^request_password_restore/$', views.request_password_restore,
        name='request_password_restore'),
    url(r'^change_password/$', views.change_password, name='change_password'),
]
