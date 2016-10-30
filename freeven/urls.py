from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings

urlpatterns = [
    url(r'^', include('web.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^manager/', include('manager.urls')),
    url(r'^track/', include('tracks.urls')),
    url(r'^api/track/', include('tracks.urls')),
    url(r'^user/', include('users.urls')),
    url(r'^api/user/', include('users.urls')),
    url(r'^api/user', include('users.urls')),
    url(r'^auth/', include('rest_framework_social_oauth2.urls')),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
