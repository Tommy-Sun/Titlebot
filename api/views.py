from django.shortcuts import render
from rest_framework import generics
from .models import Title
from .serializers import TitleSerializer

# Create your views here.
class TitleView(generics.CreateAPIView):
    queryset = Title.objects.all()
    serializer_class = TitleSerializer