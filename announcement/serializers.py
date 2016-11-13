from .models import Announcement, Item
from rest_framework import serializers


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
