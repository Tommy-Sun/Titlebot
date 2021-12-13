from typing import DefaultDict
from django.db import models

# Create your models here.
class Title(models.Model):
    title = models.CharField(max_length=250)
    url = models.CharField(max_length=250, null=False)
    favIcon = models.ImageField(upload_to='images/', default='/computer-icons-information-png-favpng-g8DtjAPPNhyaU9EdjHQJRnV97_t.jpeg')
    created_at = models.DateTimeField(auto_now_add=True)
    favorited = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.url