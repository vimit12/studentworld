from django.urls import path, re_path
from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^bio_home/$', views.bio_home, name='bio-home'),
]
