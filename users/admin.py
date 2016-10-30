from django.contrib import admin
from .models import Artist, BusinessAgent, TokenUser


@admin.register(Artist)
class ArtistAdmin(admin.ModelAdmin):
    pass


@admin.register(BusinessAgent)
class BusinessAgentAdmin(admin.ModelAdmin):
    pass


@admin.register(TokenUser)
class TokenUserAdmin(admin.ModelAdmin):
    pass
