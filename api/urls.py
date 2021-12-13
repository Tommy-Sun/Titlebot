from django.urls import path
from .views import TitleView

urlpatterns = [
    path('', TitleView.as_view())
]
