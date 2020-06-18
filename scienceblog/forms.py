from django import forms
from .models import Comment,Post,Profile
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class EmailForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Name', 'required': True}))
    email = forms.EmailField(widget=forms.EmailInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Email', 'required': True}))
    to = forms.EmailField(widget=forms.EmailInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Email', 'required': True}))
    comments = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'form-control', 'placeholder': 'Add Comment', 'required': True, 'rows': 4, 'cols': 15}))
    

class CommentForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Name', 'required': True}))
    email = forms.EmailField(widget=forms.EmailInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Email', 'required': True}))
    body = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'form-control', 'placeholder': 'Add Comment', 'required': True, 'rows': 4, 'cols': 15}))

    class Meta:
        model=Comment
        fields = ('name','email','body')

class PostForm(forms.ModelForm):
    STATUS_CHOICES = (('draft', 'Draft'), ('published', 'Published'))
    
    title = forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Enter title of Post','required':True}))
    author = forms.CharField(widget=forms.TextInput(attrs={
                             'class': 'form-control', 'placeholder': 'Your Name'}), required=False, disabled=True)
    body = forms.CharField(widget=forms.Textarea(
        attrs={'class': 'form-control', 'placeholder': 'Add Content', 'required': True, 'rows': 6, 'cols': 15}))
    status = forms.ChoiceField(widget=forms.Select(
        attrs={'class': 'form-control choice'}), initial=None, show_hidden_initial=False, choices=STATUS_CHOICES)
    
    class Meta:
        model=Post
        fields = ('title','author','body','status')

class SignUpForm(forms.ModelForm):
    username = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Username', 'required': True}))
    first_name = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Name', 'required': True}))
    last_name = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Name', 'required': True}))
    email = forms.EmailField(widget=forms.EmailInput(
        attrs={'class': 'form-control', 'placeholder': 'Your Email', 'required': True}))
    password = forms.CharField(widget=forms.PasswordInput(
        attrs={'class': 'form-control choice'}))
    
    class Meta:
        model=User
        fields = ['username', 'password', 'email', 'first_name', 'last_name']
    
class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField()
    
    class Meta:
        model = User
        fields=['username','email','password1','password2']
    
class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email']

class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model=Profile
        fields = ['image']
