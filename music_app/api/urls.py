
from django.urls import path
from .view import main


urlpatterns = [
    path('', main)
]
