import psutil

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User

from functools import wraps

from blog.serializers import CategorySerializer, BlogSerializer, UserInfoSerializer
from blog.models import Category, Blog

from users.models import UserInfo, APIKey


def api_token_required(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return Response({'message': 'Token is required'}, status=status.HTTP_401_UNAUTHORIZED)

        api_key = APIKey.objects.filter(token=token).first()
        if not api_key:
            return Response({'message': 'Invalid token'}, status=status.HTTP_401_UNAUTHORIZED)

        user_info = UserInfo.objects.get(user=api_key.user)
        if not user_info.check_api_limit():
            return Response({'message': 'API limit reached'}, status=status.HTTP_429_TOO_MANY_REQUESTS)

        user_info.api_used += 1
        user_info.save()

        return view_func(request, *args, **kwargs)
    return _wrapped_view


@api_view(['GET'])
@api_token_required
def api_author_list(request):
    authors = UserInfo.objects.all()
    serializer = UserInfoSerializer(authors, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@api_token_required
def api_author_detail(request, author_id):
    try:
        author = UserInfo.objects.get(id=author_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = UserInfoSerializer(author, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def api_category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def api_category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CategorySerializer(category, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
@api_token_required
def api_category_create(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@api_token_required
def api_blog_list(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def api_blog_detail(request, blog_id):
    try:
        blog = Blog.objects.get(id=blog_id)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BlogSerializer(blog, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = BlogSerializer(instance=blog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
@api_token_required
def api_blog_create(request):
    serializer = BlogSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def api_system_info(request):
    system = {
        'cpu_percent': psutil.cpu_percent(interval=2),
        'memory_total': int(psutil.virtual_memory().total / (1024 ** 2)),
        'memory_used': int(psutil.virtual_memory().used / (1024 ** 2)),
        'memory_percent': psutil.virtual_memory().percent,
    }

    return Response(system)
