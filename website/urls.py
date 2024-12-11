"""
URL configuration for website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# Import the home view from the views.py file
from website.views import home, about, blog_list, blog_detail, services, portfolio, contact

# Import authentication views
from website.authentication import auth_login, auth_register, auth_logout

# Import the settings module
from django.conf import settings
from django.conf.urls.static import static

# Import api
from blog.api import (
    api_category_list, api_category_detail, api_category_create,
    api_blog_list, api_blog_detail, api_blog_create,
    api_author_list, api_author_detail,
    api_system_info
)

# URL patterns

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', home, name='home'),
    path('about/', about, name='about'),
    path('blog/', blog_list, name='blogs'),
    path('blog/<slug:slug>/', blog_detail, name='post_detail'),
    path('services/', services, name='services'),
    path('portfolio/', portfolio, name='portfolio'),
    path('contact/', contact, name='contact'),

    path('login/', auth_login, name='login'),
    path('register/', auth_register, name='register'),
    path('logout/', auth_logout, name='logout'),

    # Custom App URL
    path('dashboard/', include('blog.urls'), name='dashboard'),

    # API URL
    path('api/categories/', api_category_list, name='api_categories_list'),
    path('api/categories/add', api_category_create, name='api_category_create'),
    path('api/categories/<int:category_id>', api_category_detail, name='api_category_detail'),

    path('api/blogs/', api_blog_list, name='api_blogs_list'),
    path('api/blogs/add', api_blog_create, name='api_blog_create'),
    path('api/blogs/<int:blog_id>', api_blog_detail, name='api_blog_detail'),

    path('api/authors/', api_author_list, name='api_authors_list'),
    path('api/authors/<int:author_id>', api_author_detail, name='api_author_detail'),

    path('api/system-info/', api_system_info, name='api_system_info'),

    # Third party URL
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api-auth/', include('rest_framework.urls')),

]

handler404 = 'website.views.custom_404'

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
