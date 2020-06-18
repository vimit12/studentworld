'''basiccalculator app base url'''

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name="home"),
    # path('', views.index),
    path(r'basic/', views.basic_cal,name='basicalculator'),
    path(r'area/', views.area),
    path(r'kids/', views.kids_section,name='kids-section'),
    path(r'alphabets/', views.alphabets_section),
    path(r'body/', views.body_part),
    path(r'fruits/', views.fruits),
    path(r'vehicle/', views.vehicle),
    path(r'animal/', views.animal),
    path(r'math/', views.math,name='math'),
    path(r'email/', views.email),
    path(r'draw/', views.draw_graph,name='draw'),
]
