from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.


def bio_home(request):
    return render(request, 'biology/home.html')
