from django.shortcuts import render
from rest_framework import generics, status
from .models import Title
from .serializers import TitleSerializer, CreateTitleSerializer, UpdateFavoriteSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class TitleView(generics.ListAPIView):
    queryset = Title.objects.all()
    serializer_class = TitleSerializer

class CreateTitleView(APIView):
    serializer_class = CreateTitleSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            url = serializer.data.get('url')
            title = Title(url=url)
            successfulDownload = title.download_icon()
            if successfulDownload == True:
                title.favIcon = "images/" + url + ".ico"
            title.title = title.get_title()
            title.save()
            return Response(TitleSerializer(title).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class UpdateFavoriteView(APIView):
    serializer_class = UpdateFavoriteSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            id = request.data['id']
            title = Title.objects.get(id=id)
            title.favorited = not title.favorited
            title.save()
            return Response(id, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)