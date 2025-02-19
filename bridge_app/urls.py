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
    path('index', views.index),
    path('bridgedes', views.bridgedes),
    path('bridgedes1', views.bridgedes1),
    path('test', views.test),
    path('test_result', views.test_result),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)



from django.urls import path
from . import views

urlpatterns = [
    path('test/<int:question_number>/', views.test, name='test'),
    path('test/result/', views.test_result, name='test_result'),
]
