from django.urls import path
from .views import index,home, profile, RegisterView

urlpatterns = [
    path('',index, name='index'),
    path('register/', RegisterView.as_view(), name='users-register'),
    path('profile/', profile, name='users-profile'),
    path('index/', index, name='index'),
]
