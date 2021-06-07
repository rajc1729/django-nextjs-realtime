from django.urls import path
from .consumers import liveHeartbeatConsumer


liveHeartbeat_v1_websocket_urlpatterns = [
    path('liveHeartbeatV1', liveHeartbeatConsumer.as_asgi()),
]