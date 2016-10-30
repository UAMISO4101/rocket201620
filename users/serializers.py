from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Donation


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'icon', 'description',)


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = (
            'artist',
            'user',
            'date',
            'value',
        )
