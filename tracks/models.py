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
    description = models.CharField(max_length=200)
    gender = models.ForeignKey(Gender)
    image = models.ImageField(upload_to='track_images')
    file = models.FileField(upload_to='tracks')
    score = models.IntegerField(default=0)
    artist = models.ForeignKey(Artist)

    def __str__(self):
        return self.name


class Top(models.Model):
    track = models.ForeignKey(Track, related_name='track')
    quantity = models.IntegerField()
    action = models.CharField(max_length=50)
    top_type = models.CharField(max_length=50)
