from django.urls import path, re_path
from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^phy_home/$', views.phy_home, name='phy-home'),
    url(r'^phy_home/mass_formula/$', views.mass_formula, name='mass-formula'),
    url(r'^phy_home/kinematic_formula/$', views.kinematic_formula, name='kinematic-formula'),
    url(r'^phy_home/escape_velocity/$', views.escape_velocity, name='escape-velocity'),
    url(r'^phy_home/ohms_law/$', views.ohms_law, name='ohms-law'),
    url(r'^phy_home/energy_formula/$', views.energy, name='energy-formula'),
    url(r'^phy_home/power/$', views.power, name='power'),
    url(r'^phy_home/heat_transfer/$', views.heat_transfer, name='heat-transfer'),
    url(r'^phy_home/optics/$', views.optics, name='optics'),
    url(r'^phy_home/buoyancy/$', views.buoyancy, name='buoyancy'),
    url(r'^phy_home/elastic/$', views.elastic, name='elastic'),
    url(r'^phy_home/electric_resistance/$', views.electric_resistance, name='electric-resistance'),
    url(r'^phy_home/solar_system/$', views.solar_system, name='solar-system'),
]
