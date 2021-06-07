from django.urls import path
from channels.http import AsgiHandler
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from .websocket_auth_middleware import TokenAuthMiddleware
from liveHeartbeat.routing import liveHeartbeat_v1_websocket_urlpatterns


application = ProtocolTypeRouter({
        "websocket": TokenAuthMiddleware(URLRouter(
            liveHeartbeat_v1_websocket_urlpatterns
        )
    )
})