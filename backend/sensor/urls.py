from django.urls import path, include
from rest_framework.routers import DefaultRouter
from sensor import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register('', views.SensorViewSet, basename='sensor')

urlpatterns = [
    path('', include(router.urls)),
]