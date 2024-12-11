from rest_framework import serializers
from django.contrib.auth.models import User

from blog.models import Category, Blog
from users.models import UserInfo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


class UserInfoSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)

    class Meta:
        model = UserInfo
        fields = ['id', 'user', 'address', 'phone', 'profile_picture']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class BlogSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    category_detail = CategorySerializer(source='category', read_only=True)
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    author_detail = UserSerializer(source='author', read_only=True)

    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'slug', 'category', 'category_detail', 'author', 'author_detail',
                  'created_at']
        read_only_fields = ['category_detail', 'author_detail']
