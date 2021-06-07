from django.contrib import admin
from authentication.models import CustomUser

# Register your models here.
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['username','first_name','last_name','email']


admin.site.register(CustomUser, CustomUserAdmin)