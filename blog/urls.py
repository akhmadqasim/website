from django.urls import path, include
from blog.views import (
    dashboard,
    category_list, category_add, category_update, category_delete,
    blog_list, blog_add, blog_detail, blog_update, blog_delete
)

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', dashboard, name='dashboard'),
    path('category/list', category_list, name='category_list'),
    path('category/add', category_add, name='category_add'),
    path('category/update/<int:category_id>', category_update, name='category_update'),
    path('category/delete/<int:category_id>', category_delete, name='category_delete'),

    path('blog/list', blog_list, name='blog_list'),
    path('blog/add', blog_add, name='blog_add'),
    path('blog/detail/<int:blog_id>', blog_detail, name='blog_detail'),
    path('blog/update/<int:blog_id>', blog_update, name='blog_update'),
    path('blog/delete/<int:blog_id>', blog_delete, name='blog_delete'),

    # Custom App URL
    path('user/', include('users.urls'), name='user'),
]
