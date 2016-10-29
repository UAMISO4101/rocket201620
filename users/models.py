from django.db import models
from django.contrib.auth.models import User


class Artist(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    SAVINGS = 'AH'
    CURRENT = 'CR'
    DEFAULT = 'NA'
    BANK_ACCOUNT_TYPE = (
        (SAVINGS, 'Ahorros'),
        (CURRENT, 'Corriente'),
        (DEFAULT, ''),
    )

    avatar = models.ImageField(upload_to='static/avatars/', null=True, blank=True)
    artistic_name = models.CharField(max_length=50, blank=True)
    bank_account_number = models.CharField(max_length=50, blank=True)
    bank_account_type = models.CharField(
        max_length=2,
        choices=BANK_ACCOUNT_TYPE,
        default=DEFAULT,
    )

    bank = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    telephone_number = models.CharField(max_length=15, blank=True)
    birth_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.user.username


class BusinessAgent(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    avatar = models.ImageField(upload_to='static/avatars/', null=True, blank=True)
    address = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    telephone_number = models.CharField(max_length=15, blank=True)
    birth_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.user.username
