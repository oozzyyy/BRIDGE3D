from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('bridge_designer', views.bridge_designer, name='bridge_designer'),
    path('', views.index),
    path('page', views.page),
    path('page1', views.page1),
    path('page2', views.page2),
    path('page3', views.page3),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)