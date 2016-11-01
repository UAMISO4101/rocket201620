from django.contrib import admin
from .models import Gender, Track, Top


@admin.register(Gender)
class GenderAdmin(admin.ModelAdmin):
    pass


@admin.register(Track)
class TrackAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "artist",
    )
    list_editable = ("artist",)


@admin.register(Top)
class TopAdmin(admin.ModelAdmin):
    list_display = (
        'track',
        'quantity',
        'action',
        'top_type',
    )
