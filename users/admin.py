from django.contrib import admin
from .models import Artist, BusinessAgent, TokenUser, Donation


@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    pass


@admin.register(BusinessAgent)
class BusinessAgentAdmin(admin.ModelAdmin):
    pass


@admin.register(TokenUser)
class TokenUserAdmin(admin.ModelAdmin):
    pass


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = (
        'artist',
        'user',
        'date',
        'value',
    )
