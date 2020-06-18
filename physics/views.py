from django.shortcuts import render

# Create your views here.
def phy_home(request):
    return render(request,'physics/home.html')

def mass_formula(request):
    return render(request, 'physics/mass_formula.html')

def kinematic_formula(request):
    return render(request, 'physics/kinematic_formula.html')

def escape_velocity(request):
    return render(request, 'physics/escape_velocity.html')

def solar_system(request):
    return render(request, 'physics/solar_system.html')

def ohms_law(request):
    return render(request, 'physics/ohms_law.html')

def energy(request):
    return render(request, 'physics/energy_formula.html')
def power(request):
    return render(request, 'physics/power.html')
def heat_transfer(request):
    return render(request, 'physics/heat_transfer.html')
def optics(request):
    return render(request, 'physics/optics.html')
def buoyancy(request):
    return render(request, 'physics/buoyancy.html')
def elastic(request):
    return render(request, 'physics/elastic.html')
def electric_resistance(request):
    return render(request, 'physics/electric_resistance.html')

