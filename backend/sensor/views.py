from django.shortcuts import render
from rest_framework import viewsets
from sensor.models import Sensor
from sensor.serializers import SensorSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.conf import settings
import jwt
import time

class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer

    def create_token(self, uid: str, type: str, serial_no:str):
        now = int(time.time())
        token_lifetime = settings.WEBSOCKET_TOKEN_LIFETIME.total_seconds()

        payload = {
            'uid': uid,
            'serial_no': serial_no,
            'type': type,
            'iat': now,
            'exp': now + int(token_lifetime),
        }
        return jwt.encode(payload, settings.WEBSOCKET_TOKEN_KEY, algorithm="HS256")

    @action(detail=False, methods=['post'])
    def user_socket_token(self, request):
        data = request.data
        if not data.get('serial_no',''):
            return Response({"message":"serial_no is mandatory"}, status=status.HTTP_400_BAD_REQUEST)
        serial_no = data['serial_no']

        sensor = Sensor.objects.filter(serial_no=serial_no).first()
        if not sensor:
            return Response({"message":"Invalid serial_no"}, status=status.HTTP_404_NOT_FOUND)
        
        token = self.create_token(str(request.user.id), 'user', serial_no)

        obj = {'websocket_token': token}
        return Response(obj, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'], permission_classes=(AllowAny,))
    def sensor_socket_token(self, request):
        data = request.data
        if not data.get('serial_no',''):
            return Response({"message":"serial_no is mandatory"}, status=status.HTTP_400_BAD_REQUEST)
        serial_no = data['serial_no']

        if not data.get('secret_key',''):
            return Response({"message":"secret_key is mandatory"}, status=status.HTTP_400_BAD_REQUEST)
        secret_key = data['secret_key']
        
        sensor = Sensor.objects.filter(serial_no=serial_no).first()
        if not sensor:
            return Response({"message":"Invalid serial_no"}, status=status.HTTP_404_NOT_FOUND)
        
        print("--->",sensor.serial_no)
        if str(sensor.secret_key) != secret_key:
            return Response({"message":"Invalid secret_key"}, status=status.HTTP_404_NOT_FOUND)


        token = self.create_token(str(sensor.serial_no), 'sensor', serial_no)

        obj = {'websocket_token': token}
        return Response(obj, status=status.HTTP_200_OK)
                           