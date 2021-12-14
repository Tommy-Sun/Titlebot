from typing import DefaultDict
from django.db import models
import requests
from rest_framework import response
import shutil

# Create your models here.
class Title(models.Model):
    title = models.CharField(max_length=250)
    url = models.CharField(max_length=250, null=False)
    favIcon = models.ImageField(upload_to='images/', default='/images/computer-icons-information-png-favpng-g8DtjAPPNhyaU9EdjHQJRnV97_t.jpeg')
    created_at = models.DateTimeField(auto_now_add=True)
    favorited = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.url

    def downloadIcon(self):
        favIcon_url  = 'http://www.google.com/s2/favicons?domain=' + self.url
        response = requests.get(favIcon_url, stream=True)
        if response.status_code == 200:    
            response.raw.decode_content = True
            with open("frontend/static/images/" + self.url + ".ico", "wb") as file:
                shutil.copyfileobj(response.raw, file)   
                with open("frontend/static/images/default.ico", "wb") as f:
                    if f.raw == response.raw:
                        print("yessssss sir")
                        return False
            return True
        return False