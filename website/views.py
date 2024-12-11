from django.shortcuts import render
from blog.models import Blog, Category


def custom_404(request, exception):
    template_name = 'home/404.html'
    context = {
        'title': 'Error 404',
        'description': 'Page not found.',
    }
    return render(request, template_name, context, status=404)


def home(request):
    template_name = 'home/pages/index.html'
    all_blogs = Blog.objects.all()

    context = {
        'title': 'Home',
        'description': 'This is my home site in the earth.',
        'new_blogs': all_blogs.order_by('-id')[:2],
    }
    return render(request, template_name, context)


def about(request):
    template_name = 'home/pages/about.html'

    context = {
        'title': 'About',
        'description': 'About my portfolio.',
    }
    return render(request, template_name, context)


def blog_list(request):
    template_name = 'home/pages/blog.html'
    all_blogs = Blog.objects.all()
    categories = Category.objects.all()
    filter_category = request.GET.get('category')

    if filter_category:
        blogs = all_blogs.filter(category__name=filter_category)
        template_name = 'home/pages/blog-category.html'
        category = filter_category
    else:
        blogs = all_blogs
        category = 'All'

    context = {
        'new_blogs': all_blogs.order_by('-id')[:2],
        'all_blogs': blogs,
        'categories': categories,
        'active_category': category,
    }
    return render(request, template_name, context)


def blog_detail(request, slug):
    template_name = 'home/pages/blog-detail.html'
    blog = Blog.objects.get(slug=slug)
    similar_blogs = Blog.objects.filter(category=blog.category).exclude(id=blog.id).order_by('-id')[:3]

    context = {
        'blog': blog,
        'similar_blogs': similar_blogs,
    }
    return render(request, template_name, context)


def services(request):
    template_name = 'home/pages/services.html'
    context = {}
    return render(request, template_name, context)


def portfolio(request):
    template_name = 'home/pages/portfolio.html'
    context = {}
    return render(request, template_name, context)


def contact(request):
    template_name = 'home/pages/contact.html'
    context = {}
    return render(request, template_name, context)
