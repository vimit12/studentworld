from django.urls import path, re_path
from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^chem_home/$', views.chem_home, name='chem-home'),
    url(r'^periodic_table/$', views.periodic_table, name='periodic-table'),
    url(r'^chemical_reaction/$', views.chemical_reaction, name='chemical-reaction'),
    url(r'^acid_base_salt/$', views.acid_base_salt, name='acid-base-salt'),
    url(r'^metal_non_metal/$', views.metal_non_metal, name='metal-non-metal'),
    url(r'^carbon/$', views.carbon, name='carbon'),
]
