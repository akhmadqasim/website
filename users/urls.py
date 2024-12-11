from django.urls import path
from users.views import (
    user_profile, user_profile_update,
    user_api_manager, user_api_add, user_api_delete, user_api_update
)

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('profile/', user_profile, name='user_profile'),
    path('profile/update/', user_profile_update, name='user_profile_update'),

    path('api-manager/', user_api_manager, name='user_api_manager'),
    path('api-manager/update/<api_id>/', user_api_update, name='user_api_update'),
    path('api-manager/add/', user_api_add, name='user_api_add'),
    path('api-manager/delete/<api_id>/', user_api_delete, name='user_api_delete'),
]
