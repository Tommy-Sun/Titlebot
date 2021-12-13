from django.shortcuts import render
from rest_framework import generics, status
from .models import Title
from .serializers import TitleSerializer, CreateTitleSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class TitleView(generics.CreateAPIView):
    queryset = Title.objects.all()
    serializer_class = TitleSerializer

class CreateTitleView(APIView):
    serializer_class = CreateTitleSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            url = serializer.data.url
            title = Title(url=url)
            title.save()




        return Response(TitleSerializer(title).data, status=status.HTTP_201_CREATED)