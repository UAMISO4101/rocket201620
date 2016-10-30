from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.user, name='user'),
    url(r'^$/(?P<guid_user>[^/]+)/$',
        views.user,
        name='user'
        ),
    url(r'^login/$', views.login_user, name='login'),
    url(r'^request_pass_restore/$', views.password_restore,
        name='request_pass_restore'),
    url(r'^pass_restore/$', views.login_user, name='pass_restore'),
]
