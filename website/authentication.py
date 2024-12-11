from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User


def auth_login(request):
    if request.user.is_authenticated:
        return redirect('dashboard')

    template_name = 'auth/pages/login.html'
    error = ''

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('dashboard')
        else:
            error = 'Invalid username or password'

    context = {
        'title': 'Login - Dashboard',
        'error': error,
    }
    return render(request, template_name, context)


def auth_register(request):
    if request.user.is_authenticated:
        return redirect('dashboard')

    template_name = 'auth/pages/register.html'
    error = ''

    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        check_user = User.objects.filter(username=username).first()

        if password != confirm_password:
            error = 'Password does not match'

        if check_user:
            error = 'Username already exists'

        user = User.objects.create_user(
            username=username,
            first_name=first_name,
            last_name=last_name,
            email=email,
            is_active=True
        )
        user.set_password(password)
        user.save()

        return redirect('login')

    context = {
        'title': 'Register - Dashboard',
        'error': error,
    }
    return render(request, template_name, context)


def auth_logout(request):
    logout(request)
    return redirect('login')
