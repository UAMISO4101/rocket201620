from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Donation, Artist, BusinessAgent, Event


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


class ArtistRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = (
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


class BussinessAgentRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessAgent
        fields = (
            'avatar',
            'address',
            'city',
            'country',
            'telephone_number',
        )


class UserRetriveSerializer(serializers.ModelSerializer):
    artist = ArtistRetrieveSerializer()
    agent = BussinessAgentRetrieveSerializer()

    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
            'artist',
            'agent',
        )


class EventSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    artist = serializers.SerializerMethodField()
    artist_id = serializers.SerializerMethodField()
    artist_user_id = serializers.SerializerMethodField()
    artist_name = serializers.SerializerMethodField()
    artist_email = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = (
            'id',
            'name',
            'date',
            'place',
            'latitude',
            'longitude',
            'description',
            'image',
            'artist',
            'artist_id',
            'artist_user_id',
            'artist_name',
            'artist_email',
        )

    @classmethod
    def get_image(self, obj):
        try:
            return obj.image.url
        except:
            return None

    @classmethod
    def get_artist(self, obj):
        try:
            return obj.artist.user.username
        except:
            return None

    @classmethod
    def get_artist_user_id(self, obj):
        try:
            return obj.artist.user.id
        except:
            return None

    @classmethod
    def get_artist_id(self, obj):
        try:
            return obj.artist.id
        except:
            return None

    @classmethod
    def get_artist_name(self, obj):
        try:
            return obj.artist.user.first_name + ' ' + obj.artist.user.last_name
        except:
            return None

    @classmethod
    def get_artist_email(self, obj):
        try:
            return obj.artist.user.email
        except:
            return None


class EventUploadSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Event
        fields = (
            'id',
            'name',
            'date',
            'place',
            'latitude',
            'longitude',
            'description',
            'image',
            'artist',
        )
