from django.contrib import admin
from users.models import UserInfo, APIKey


# Register your models here.
class UserInfoAdmin(admin.ModelAdmin):
    list_display = ['user', 'address', 'phone']
    search_fields = ['user__username']


class APIKeyAdmin(admin.ModelAdmin):
    list_display = ['user', 'name', 'token', 'expired_at']
    search_fields = ['user__username']


admin.site.register(UserInfo, UserInfoAdmin)
admin.site.register(APIKey, APIKeyAdmin)
