# -*- coding: UTF-8 -*-
from django.db import models
from users.models import BusinessAgent
from tracks.models import Gender, Track
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.conf import settings
from django.core.mail import send_mail


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
    tracks = models.ManyToManyField(Track, related_name='ancts')
    winner = models.ForeignKey(Track, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.id is not None and self.winner is not None:
            try:
                item_track = Track.objects.get(id=self.winner.id,
                                               ancts__id=self.id)
                notificar = False

                winner = Item.objects.get(id=self.id).winner
                if winner != self.winner:
                    notificar = True
                super(Item, self).save(*args, **kwargs)

                if notificar:
                    Item.send_mail_to_winner_action(item_track.artist, self)
            except:
                error = 'Obra no inscrita en esta categoría.'
                raise serializers.ValidationError(error)
        else:
            super(Item, self).save(*args, **kwargs)

    def send_mail_to_winner_action(artist, item):
        try:
            subject = 'Freeven :: Ganador de convocatoria'
            body_text = 'Estimado ' + artist.user.first_name + ', \n\n'
            body_text = body_text + 'Lo queremos felicitar por ser el ganador '
            body_text = body_text + 'de la categoria ' + item.name + ' de la '
            body_text = body_text + 'convocatoria ' + item.announcement.name
            body_text = body_text + '.\n\nPor favor comunicarse con el agente '
            body_text = body_text + 'comercial responsable.'
            body_text = body_text + '\n\nCordial saludo,'

            send_mail(subject, body_text, settings.EMAIL_HOST_USER,
                      [artist.user.email], fail_silently=True)
            return True
        except:
            return False

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
            error = 'Obra no inscrita en esta categoría de la convocatoria.'
            raise serializers.ValidationError(error)
        else:
            super(Vote, self).save(*args, **kwargs)

    class Meta:
        unique_together = ("item", "user")

    def __str__(self):
        return self.item.name + ' - ' + self.track.name
