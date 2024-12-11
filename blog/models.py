from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

from ckeditor_uploader.fields import RichTextUploadingField


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = '1. Kategori'


class Blog(models.Model):
    title = models.CharField(max_length=255)
    # content = models.TextField(blank=True, null=True)
    content = RichTextUploadingField(
        config_name='special',
        external_plugin_resources=[
            ('youtube', '/static/dashboard/third-party/ckeditor_plugins/youtube/youtube/', 'plugin.js'),
        ],
        blank=True,
        null=True
    )
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    thumbnail = models.ImageField(upload_to='blog', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True, null=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Blog, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = '2. Blog'
