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
    itemid = 1

    def __init__(self, *args, **kwargs):
        super(TrackAnctSerializer, self).__init__(*args, **kwargs)
        print(kwargs['context']['id'])
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
                track__id=obj.id, item__id=self.itemid).count()
            print(self.itemid)
            return count_votes
        except:
            return None


class ItemFullSerializer(ItemSerializer):
    tracks = TrackAnctSerializer(many=True, context={'id': 100})

    class Meta:
        model = Item
        fields = (
            'id',
            'name',
            'description',
            'image',
            'gender',
            'tracks',
        )


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


class AnctParticipateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vote
        fields = (
            'id',
            'item',
            'user',
            'track',
        )
