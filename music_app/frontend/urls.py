from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('', index, name='index'),
    path('info/', index), 
    path('join/', index), 
    path('create/', index), 
    path('room/<str:roomCode>/', index),  
]
