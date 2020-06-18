from django.shortcuts import render
import datetime
# Create your views here.


def chem_home(request):
    date_now = datetime.datetime.now()
    year = date_now.year
    return render(request, 'chemistry/home.html', context={'year': year})

def periodic_table(request):
    return render(request,'chemistry/periodic.html')

def chemical_reaction(request):
    return render(request,'chemistry/chemical_reaction.html')


def acid_base_salt(request):
    return render(request, 'chemistry/acid_base_salt.html')

def metal_non_metal(request):
    return render(request, 'chemistry/metal_non_metal.html')
def carbon(request):
    return render(request, 'chemistry/carbon.html')
