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
    #  # BaseView is a static html
    # url(r'^about/', HomeView.as_view()),  # HomeView is an Ember Single Page Application
    # url(r'^home/', HomeView.as_view()),  # HomeView is an Ember Single Page Application
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
