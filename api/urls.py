from django.urls import path
from .views import TitleView, CreateTitleView, UpdateFavoriteView

urlpatterns = [
    path('', TitleView.as_view()),
    path('create-title', CreateTitleView.as_view()),
    path('update-favorite', UpdateFavoriteView.as_view())
]
