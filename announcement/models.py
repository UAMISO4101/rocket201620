from django.db import models
from users.models import BusinessAgent
from tracks.models import Gender, Track
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


class Announcement(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=False)
    start_date = models.DateField(blank=False, null=False)
    end_date = models.DateField(blank=False, null=False)
    image = models.ImageField(upload_to='anct_images', null=True, blank=True)
    popular_selection = models.BooleanField(default=True)
    open = models.BooleanField(default=True)

    owner = models.ForeignKey(BusinessAgent, blank=False, null=False,
                              related_name='ancts')

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=False)
    image = models.ImageField(upload_to='anct_images', null=True, blank=True)

    announcement = models.ForeignKey(Announcement, blank=False, null=False,
                                     on_delete=models.CASCADE,
                                     related_name='items')
    gender = models.ForeignKey(Gender, blank=True, null=True)
    tracks = models.ManyToManyField(Track, blank=True, null=True,
                                    related_name='ancts')
    winner = models.ForeignKey(Track, blank=True, null=True)

    def __str__(self):
        return self.name


class Vote(models.Model):
    item = models.ForeignKey(Item, blank=False, null=False,
                             on_delete=models.CASCADE,
                             related_name='votes')
    track = models.ForeignKey(Track, blank=False, null=False)
    user = models.ForeignKey(User, blank=False, null=False)

    def save(self, *args, **kwargs):
        item_track = Track.objects.filter(ancts__id=self.item.id)

        if len(item_track) == 0:
            raise ValidationError('Obra no inscrita en la convocatoria.')
        else:
            super(Vote, self).save(*args, **kwargs)

    class Meta:
        unique_together = ("item", "user")

    def __str__(self):
        return self.item.name + ' - ' + self.track.name
