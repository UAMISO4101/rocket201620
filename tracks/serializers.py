from .models import Track, Top
from rest_framework import serializers


class TrackSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()
    artist = serializers.SerializerMethodField()

    class Meta:
        model = Track
        fields = (
            'name',
            'description',
            'gender',
            'image',
            'url',
            'score',
            'artist',
        )

    def get_image(self, obj):
        try:
            return obj.image.url
        except:
            return None

    def get_url(self, obj):
        try:
            return obj.file.url
        except:
            return None

    def get_gender(self, obj):
        try:
            return obj.gender.name
        except:
            return None

    def get_artist(self, obj):
        try:
            return obj.artist.user.username
        except:
            return None


class TopSerializer(serializers.ModelSerializer):
    track = TrackSerializer(read_only=True)

    class Meta:
        model = Top
        fields = (
            'track',
            'quantity',
            'top_type',
        )
