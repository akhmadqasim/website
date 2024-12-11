from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

from users.models import UserInfo, APIKey
from users.forms import APIKeyForm, UserInfoForm

from blog.models import Blog


# Create your views here.
@login_required
def user_profile(request):
    template_name = 'dashboard/pages/user/profile/view.html'
    user = User.objects.get(username=request.user)
    user_info = UserInfo.objects.get(user=request.user)
    total_blogs = Blog.objects.filter(author=request.user).count()

    context = {
        'title': 'User Profile',
        'description': user.first_name + ' ' + user.last_name,
        'user_info': user_info,
        'total_blogs': total_blogs,
    }
    return render(request, template_name, context)


@login_required
def user_profile_update(request):
    template_name = 'dashboard/pages/user/profile/edit.html'
    user_info = UserInfo.objects.get(user=request.user)
    form = UserInfoForm(instance=user_info)

    if request.method == 'POST':
        form = UserInfoForm(request.POST, request.FILES, instance=user_info)

        if form.is_valid():
            form.save()

            return redirect('user_profile')

    context = {
        'title': 'User Profile',
        'description': 'Update your profile information.',
        'user_info': user_info,
        'form': form,
    }

    return render(request, template_name, context)


@login_required
def user_api_manager(request):
    template_name = 'dashboard/pages/user/api/list.html'
    user_info = UserInfo.objects.get(user=request.user)
    api_keys = APIKey.objects.filter(user=request.user)

    context = {
        'title': 'API Manager',
        'description': 'API Manager',
        'user_info': user_info,
        'api_keys': api_keys,
        'api_limit': user_info.api_limit - user_info.api_used,
    }
    return render(request, template_name, context)


@login_required
def user_api_add(request):
    template_name = 'dashboard/pages/user/api/add.html'
    user_info = UserInfo.objects.get(user=request.user)
    form = APIKeyForm()

    if request.method == 'POST':
        form = APIKeyForm(request.POST)

        if form.is_valid():
            api_key = form.save(commit=False)
            api_key.user = request.user
            api_key.token = User.objects.make_random_password(length=16)
            api_key.save()

            return redirect('user_api_manager')

    context = {
        'title': 'API Manager',
        'description': 'API Manager',
        'user_info': user_info,
        'form': form,
    }

    return render(request, template_name, context)


@login_required
def user_api_update(request, api_id):
    template_name = 'dashboard/pages/user/api/edit.html'
    user_info = UserInfo.objects.get(user=request.user)
    api_key = APIKey.objects.get(id=api_id)
    form = APIKeyForm(instance=api_key)

    if request.method == 'POST':
        form = APIKeyForm(request.POST, instance=api_key)

        if form.is_valid():
            api_key = form.save(commit=False)
            api_key.user = request.user
            api_key.save()

            return redirect('user_api_manager')

    context = {
        'title': 'API Manager',
        'description': 'API Manager',
        'user_info': user_info,
        'api_key': api_key,
        'form': form,
    }

    return render(request, template_name, context)


@login_required
def user_api_delete(request, api_id):
    api_key = APIKey.objects.get(id=api_id)
    api_key.delete()

    return redirect('user_api_manager')
