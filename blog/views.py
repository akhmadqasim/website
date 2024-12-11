from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required, user_passes_test

from blog.models import Category, Blog
from blog.forms import CategoryForm, BlogForm

from users.models import UserInfo


# Create your views here.
def is_admin(user):
    if user.groups.filter(name='Admin').exists():
        return True
    return False


@login_required
def dashboard(request):
    template_name = 'dashboard/pages/index.html'
    choice = ["Morning", "Afternoon", "Evening", "Night"]

    def get_time():
        import datetime
        time = datetime.datetime.now()
        if time.hour < 12:
            return choice[0]
        elif time.hour < 18:
            return choice[1]
        elif time.hour < 21:
            return choice[2]
        else:
            return choice[3]

    try:
        user_info = UserInfo.objects.get(user=request.user)
    except UserInfo.DoesNotExist:
        UserInfo.objects.create(user=request.user)
        user_info = UserInfo.objects.get(user=request.user)

    context = {
        'title': 'Dashboard',
        'description': 'Dashboard',
        'user_info': user_info,
        'time_now': get_time(),
    }
    return render(request, template_name, context)


@login_required
@user_passes_test(is_admin, login_url='logout')
def category_list(request):
    template_name = 'dashboard/pages/category/list.html'
    user_info = UserInfo.objects.get(user=request.user)
    categories = Category.objects.all()

    context = {
        'title': 'Category List',
        'description': 'Category list for the blog post.',
        'user_info': user_info,
        'categories': categories,
    }
    return render(request, template_name, context)


@login_required
@user_passes_test(is_admin, login_url='logout')
def category_add(request):
    template_name = 'dashboard/pages/category/add.html'
    user_info = UserInfo.objects.get(user=request.user)
    form = CategoryForm()

    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(category_list)

    context = {
        'title': 'New Category',
        'description': 'Create a new category for the blog post.',
        'user_info': user_info,
        'form': form,
    }
    return render(request, template_name, context)


@login_required
@user_passes_test(is_admin, login_url='logout')
def category_update(request, category_id):
    template_name = 'dashboard/pages/category/update.html'
    user_info = UserInfo.objects.get(user=request.user)
    category = Category.objects.get(id=category_id)

    if request.method == 'POST':
        try:
            name = request.POST.get('name')
            if name:
                # Coba cek namanya sebelum diupdate, apakah sudah ada atau belum
                if name.lower() == category.name.lower():
                    return redirect(category_list)
                category.name = name
                category.save()
                return redirect(category_list)
        except Category.DoesNotExist:
            return redirect(category_list)

    context = {
        'title': 'Update Category',
        'description': 'Update a category for the blog post.',
        'user_info': user_info,
        'category': category,
    }
    return render(request, template_name, context)


@login_required
@user_passes_test(is_admin, login_url='logout')
def category_delete(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        category.delete()
        return redirect(category_list)
    except Category.DoesNotExist:
        return redirect(category_list)


@login_required
def blog_list(request):
    template_name = 'dashboard/pages/post/list.html'
    user_info = UserInfo.objects.get(user=request.user)
    blogs = Blog.objects.all()

    if not request.user.groups.filter(name='Admin').exists():
        blogs = Blog.objects.filter(author=request.user)

    context = {
        'title': 'Blog List',
        'description': 'Blog list for the blog post.',
        'user_info': user_info,
        'blogs': blogs,
    }
    return render(request, template_name, context)


@login_required
def blog_add(request):
    template_name = 'dashboard/pages/post/forms.html'
    user_info = UserInfo.objects.get(user=request.user)
    forms = BlogForm()

    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect(blog_list)

    context = {
        'title': 'New Blog',
        'description': 'Create a new blog post.',
        'user_info': user_info,
        'form': forms,
    }
    return render(request, template_name, context)


@login_required
def blog_detail(request, blog_id):
    template_name = 'dashboard/pages/post/detail.html'
    user_info = UserInfo.objects.get(user=request.user)
    post = Blog.objects.get(id=blog_id)

    context = {
        'title': 'Blog Details | ' + post.title,
        'description': 'Detail blog post.',
        'user_info': user_info,
        'post': post,
    }
    return render(request, template_name, context)


@login_required
def blog_update(request, blog_id):
    template_name = 'dashboard/pages/post/forms.html'
    user_info = UserInfo.objects.get(user=request.user)
    post = Blog.objects.get(id=blog_id)
    forms = BlogForm(instance=post)

    if not request.user.groups.filter(name='Admin').exists():
        if post.author != request.user:
            return redirect(blog_list)

    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect(blog_list)

    context = {
        'title': 'Update Blog | ' + post.title,
        'description': 'Update a blog post.',
        'user_info': user_info,
        'post': post,
        'form': forms,
    }
    return render(request, template_name, context)


@login_required
def blog_delete(request, blog_id):
    try:
        post = Blog.objects.get(id=blog_id)
        post.delete()
        return redirect(blog_list)
    except Blog.DoesNotExist:
        return redirect(blog_list)
