from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Donation, Artist


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'icon', 'description',)


class DonationSerializer(serializers.ModelSerializer):
    user_first_name = serializers.SerializerMethodField()
    user_last_name = serializers.SerializerMethodField()

    class Meta:
        model = Donation
        fields = (
            'artist',
            'user',
            'user_first_name',
            'user_last_name',
            'date',
            'value',
        )

    def get_user_first_name(self, obj):
        try:
            return obj.user.first_name
        except:
            return None

    def get_user_last_name(self, obj):
        try:
            return obj.user.last_name
        except:
            return None


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
        )


class ArtistSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Artist
        fields = (
            'user',
            'avatar',
            'artistic_name',
            'bank_account_number',
            'bank_account_type',
            'bank',
            'address',
            'city',
            'country',
            'telephone_number',
            'birth_date',
        )
