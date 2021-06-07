from django.contrib import admin
from sensor.models import Sensor

# Register your models here.
class SensorAdmin(admin.ModelAdmin):
    readonly_fields = ('stored_at', 'updated_at', )
    list_display = ['name','description','serial_no','mac_address', 'sensor_type', 'manufacturer', 'stored_at',  'updated_at', 'secret_key']



admin.site.register(Sensor, SensorAdmin)
