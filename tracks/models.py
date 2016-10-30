from django.db import models
from users.models import Artist


class Gender(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True)
    state = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Track(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True, blank=True)
    gender = models.ForeignKey(Gender)
    image = models.ImageField(upload_to='track_images', null=True, blank=True)
    file = models.FileField(upload_to='tracks')
    score = models.IntegerField(default=0)
    artist = models.ForeignKey(Artist)

    def __str__(self):
        return self.name
