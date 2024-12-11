from django import forms
from users.models import APIKey, UserInfo
from django.utils import timezone


TIME_CHOICES = [
    (timezone.now() + timezone.timedelta(days=7), '1 Week'),
    (timezone.now() + timezone.timedelta(days=30), '1 Month'),
    (timezone.now() + timezone.timedelta(days=90), '3 Months'),
    (timezone.now() + timezone.timedelta(days=180), '6 Months'),
    (timezone.now() + timezone.timedelta(days=365), '1 Year'),
]


class APIKeyForm(forms.ModelForm):
    class Meta:
        model = APIKey
        fields = ['name', 'expired_at']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Name'}),
            'expired_at': forms.Select(choices=TIME_CHOICES, attrs={'class': 'form-control'}),
        }


class UserInfoForm(forms.ModelForm):
    class Meta:
        model = UserInfo
        fields = ['profile_picture', 'phone', 'address']
        widgets = {
            'profile_picture': forms.FileInput(attrs={'class': 'form-control, w-full hidden'}),
            'phone': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Phone'}),
            'address': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Address'}),
        }
