from .models import Track, Top, Gender
from rest_framework import serializers


class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = (
            'id',
            'name',
            'description',
        )


class TrackUploadSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)
    file = serializers.FileField(max_length=None, use_url=True)

    class Meta:
        model = Track
        fields = (
            'name',
            'description',
            'gender',
            'image',
            'file',
            'artist',
        )


class TrackSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    artist = serializers.SerializerMethodField()
    artist_id = serializers.SerializerMethodField()
    artistic_name = serializers.SerializerMethodField()

    class Meta:
        model = Track
        fields = (
            'id',
            'name',
            'description',
            'gender',
            'image',
            'url',
            'score',
            'artist',
            'artist_id',
            'artistic_name',
        )

    @classmethod
    def get_image(self, obj):
        try:
            return obj.image.url
        except:
            return None

    @classmethod
    def get_url(self, obj):
        try:
            return obj.file.url
        except:
            return None

    @classmethod
    def get_gender(self, obj):
        try:
            return obj.gender.name
        except:
            return None

    @classmethod
    def get_artist(self, obj):
        try:
            return obj.artist.user.username
        except:
            return None

    @classmethod
    def get_artist_id(self, obj):
        try:
            return obj.artist.id
        except:
            return None

    @classmethod
    def get_artistic_name(self, obj):
        try:
            return obj.artist.artistic_name
        except:
            return None


class TopSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField()
    name = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    score = serializers.SerializerMethodField()
    artist = serializers.SerializerMethodField()
    artist_id = serializers.SerializerMethodField()
    artistic_name = serializers.SerializerMethodField()

    class Meta:
        model = Top
        fields = (
            'id',
            'name',
            'description',
            'gender',
            'image',
            'url',
            'score',
            'artist',
            'artist_id',
            'artistic_name',
            'quantity',
            'top_type',
        )

    @classmethod
    def get_id(self, obj):
        try:
            return obj.track.id
        except:
            return None

    @classmethod
    def get_name(self, obj):
        try:
            return obj.track.name
        except:
            return None

    @classmethod
    def get_description(self, obj):
        try:
            return obj.track.description
        except:
            return None

    @classmethod
    def get_score(self, obj):
        try:
            return obj.track.score
        except:
            return None

    @classmethod
    def get_image(self, obj):
        try:
            return obj.track.image.url
        except:
            return None

    @classmethod
    def get_url(self, obj):
        try:
            return obj.track.file.url
        except:
            return None

    @classmethod
    def get_gender(self, obj):
        try:
            return obj.track.gender.name
        except:
            return None

    @classmethod
    def get_artist(self, obj):
        try:
            return obj.track.artist.user.username
        except:
            return None

    @classmethod
    def get_artist_id(self, obj):
        try:
            return obj.track.artist.id
        except:
            return None

    @classmethod
    def get_artistic_name(self, obj):
        try:
            return obj.track.artist.artistic_name
        except:
            return None
