from django.contrib import admin
from .models import Gender, Track


@admin.register(Gender)
class GenderAdmin(admin.ModelAdmin):
    pass


@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    pass
