from django.db import models
import uuid


SENSOR_TYPE = (
    ('wall_mount','WALL_MOUNT'),
    ('outdoor', 'OUTDOOR'),
    ('ceiling_mount','CEILING_MOUNT'),
)

class Sensor(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField(blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    serial_no = models.TextField(blank=False, null=False, unique=True)
    secret_key = models.TextField(blank=False, null=False)
    mac_address =  models.TextField(blank=False, null=False)
    sensor_type = models.CharField(max_length=30, choices=SENSOR_TYPE, default='ceiling_mount')
    manufacturer = models.TextField(blank=False, null=False)
    stored_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)