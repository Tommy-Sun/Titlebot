from django.urls import path
from .views import TitleView, CreateTitleView

urlpatterns = [
    path('', TitleView.as_view()),
    path('create-title', CreateTitleView.as_view())
]
