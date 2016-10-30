from django.contrib import admin
from users.models import BusinessAgent


# Register your models here.
@admin.register(BusinessAgent)
class BusinessAgentAdmin(admin.ModelAdmin):
    pass
