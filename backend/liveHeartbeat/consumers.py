from channels.generic.websocket import AsyncJsonWebsocketConsumer
# from urllib.parse import parse_qs
import json


class liveHeartbeatConsumer(AsyncJsonWebsocketConsumer):

    async def connect(self):
        # query = parse_qs(self.scope['query_string'].decode('utf8'))

        # if 'sensor_id' not in query:
        #     raise ValueError(
        #     "sensor_id not found"
        #     )
        
        # self.sensor_id = query['sensor_id'][0]
        # self.sensor = self.scope["serial_no"]

        await self.channel_layer.group_add(
            self.scope["serial_no"],
            self.channel_name
        )
        await self.accept()

    async def receive(self, text_data=None, bytes_data=None):

        json_data = json.loads(text_data)
        
        data = json_data['data']
        await self.channel_layer.group_send(
            self.scope["serial_no"],{
                "type": 'notify_status',
                "data": data
            }
        )

    async def disconnect(self, close_code=None):
        await self.channel_layer.group_discard(
            self.scope["serial_no"],
            self.channel_name
        )
    
    async def notify_status(self, event):
        data = event['data']
        await self.send_json({"data": data })
