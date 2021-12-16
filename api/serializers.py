from rest_framework import serializers
from .models import Title

class TitleSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Title
        fields = ('id', 'title', 'url', 'favIcon', 'created_at', 'favorited')
        
class CreateTitleSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Title
        fields = ('url',)

class UpdateFavoriteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Title
        fields = ('id',)