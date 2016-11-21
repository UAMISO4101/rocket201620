from .models import Announcement, Item, Vote
from tracks.models import Track
from rest_framework import serializers
from tracks.serializers import TrackSerializer


class ItemSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = (
            'id',
            'name',
            'description',
            'image',
            'gender',
        )

    @classmethod
    def get_image(self, obj):
        try:
            return obj.image.url
        except:
            return None

    @classmethod
    def get_gender(self, obj):
        try:
            return obj.gender.name
        except:
            return None


class ItemUploadSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Item
        fields = (
            'id',
            'name',
            'description',
            'image',
            'gender',
            'winner',
            'announcement',
        )


class AnnouncementSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    owner = serializers.SerializerMethodField()
    owner_id = serializers.SerializerMethodField()
    owner_user_id = serializers.SerializerMethodField()
    owner_name = serializers.SerializerMethodField()
    owner_email = serializers.SerializerMethodField()
    items = ItemSerializer(many=True)

    class Meta:
        model = Announcement
        fields = (
            'id',
            'name',
            'description',
            'start_date',
            'end_date',
            'image',
            'popular_selection',
            'open',
            'owner',
            'owner_id',
            'owner_user_id',
            'owner_name',
            'owner_email',
            'items',
        )

    @classmethod
    def get_image(self, obj):
        try:
            return obj.image.url
        except:
            return None

    @classmethod
    def get_owner(self, obj):
        try:
            return obj.owner.user.username
        except:
            return None

    @classmethod
    def get_owner_user_id(self, obj):
        try:
            return obj.owner.user.id
        except:
            return None

    @classmethod
    def get_owner_id(self, obj):
        try:
            return obj.owner.id
        except:
            return None

    @classmethod
    def get_owner_name(self, obj):
        try:
            return obj.owner.user.first_name + ' ' + obj.owner.user.last_name
        except:
            return None

    @classmethod
    def get_owner_email(self, obj):
        try:
            return obj.owner.user.email
        except:
            return None


class AnnouncementUploadSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)
    # items = ItemUploadSerializer(many=True)

    class Meta:
        model = Announcement
        fields = (
            'id',
            'name',
            'description',
            'start_date',
            'end_date',
            'image',
            'popular_selection',
            'open',
            'owner',
            # 'items',
        )


class TrackAnctSerializer(TrackSerializer):
    votes = serializers.SerializerMethodField()
    itemid = None

    def __init__(self, *args, **kwargs):
        super(TrackSerializer, self).__init__(*args, **kwargs)
        itemid = kwargs['context']['id']

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
            'votes',
        )

    @classmethod
    def get_votes(self, obj):
        try:
            count_votes = Vote.objects.filter(
                track__id=obj.id, item__id=self.get_itemid()).count()
            return count_votes
        except:
            return None

    def get_itemid():
        return itemid


class ItemFullSerializer(ItemSerializer):
    # tracks = TrackAnctSerializer(many=True, context={'id': 100})
    tracks = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = (
            'id',
            'name',
            'description',
            'image',
            'gender',
            'winner',
            'tracks',
        )

    @classmethod
    def get_tracks(self, obj):
        tracks = []
        for track in obj.tracks.all():
            track_js = self.track_to_json(track, obj)
            tracks.append(track_js)
        return tracks

    def track_to_json(track, item):
        count_votes = Vote.objects.filter(
            track__id=track.id, item__id=item.id).count()

        json_data = {
            'id': track.id,
            'name': track.name,
            'description': track.description,
            'gender': track.gender.name,
            'image': track.image.url,
            'url': track.file.url,
            'score': track.score,
            'artist': track.artist.user.username,
            'artist_id': track.artist.id,
            'artistic_name': track.artist.artistic_name,
            'votes': count_votes
        }
        return json_data


class AnnouncementFullSerializer(AnnouncementSerializer):
    items = ItemFullSerializer(many=True)

    class Meta:
        model = Announcement
        fields = (
            'id',
            'name',
            'description',
            'start_date',
            'end_date',
            'image',
            'popular_selection',
            'open',
            'owner',
            'owner_id',
            'owner_user_id',
            'owner_name',
            'owner_email',
            'items',
        )


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = (
            'id',
            'item',
            'user',
            'track',
        )


class VoteUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = (
            'track',
        )


class ParticipateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = (
            'tracks',
        )


class SelectWinnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = (
            'winner',
        )
