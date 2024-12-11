from django.contrib import admin
from blog.models import Category, Blog

# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author']
    search_fields = ['title']


admin.site.register(Blog, ArticleAdmin)
admin.site.register(Category)
