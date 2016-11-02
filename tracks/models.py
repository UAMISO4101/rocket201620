from django.db import models
from decimal import Decimal
from users.models import Artist
from django.contrib.auth.models import User


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
    score = models.DecimalField(max_digits=4, decimal_places=2,
                                default=Decimal('0.00'))
    count_votes = models.IntegerField(default=0)
    artist = models.ForeignKey(Artist)

    def __str__(self):
        return self.name


class RateTrack(models.Model):
    track = models.ForeignKey(Track, blank=False, null=False)
    user = models.ForeignKey(User, blank=False, null=False)
    rate = models.IntegerField(default=0)
    date = models.DateTimeField(auto_now=True, null=True, blank=True)


class Top(models.Model):
    track = models.ForeignKey(Track, related_name='track')
    quantity = models.IntegerField()
    action = models.CharField(max_length=50)
    top_type = models.CharField(max_length=50)
