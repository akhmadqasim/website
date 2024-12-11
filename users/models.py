from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class APIKey(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    token = models.CharField(max_length=100)
    expired_at = models.DateTimeField()

    def is_expired(self):
        return self.expired_at < timezone.now()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'API'


class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='users', blank=True, null=True)
    api_limit = models.IntegerField(default=5000)
    api_used = models.IntegerField(default=0)
    last_api_reset = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.user.username

    def check_api_limit(self):
        if self.api_used >= self.api_limit:
            return False
        return True

    def api_remaining(self):
        return self.api_limit - self.api_used

    class Meta:
        verbose_name_plural = 'Biodata'
