from django.urls import path
from . import views

app_name = 'AG'

urlpatterns = [
    path('',views.Home,name = 'HomeAg'),
    path('AG-Resultado/',views.ObtenerDatos,name = 'AGResultado'),
]