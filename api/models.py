from django.db import models

# Create your models here.
class Title(models.Model):
    title = models.CharField(max_length=50)
    favIcon = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)
    favorited = models.BooleanField(null=False, default=False)