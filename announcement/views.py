from django.shortcuts import render
from .models import Announcement, Item, Vote
from .serializers import (AnnouncementSerializer, AnnouncementUploadSerializer,
                          ItemUploadSerializer, AnnouncementFullSerializer,
                          VoteSerializer, VoteUpdateSerializer)
from rest_framework import filters
from rest_framework.generics import (ListAPIView, CreateAPIView, UpdateAPIView)


class AnnouncementListView(ListAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = (
        'name',
        'description',
        'id',
    )


class AnnouncementCompleteListView(ListAPIView):
    serializer_class = AnnouncementFullSerializer

    def get_queryset(self):
        anct = Announcement.objects.filter(pk=self.kwargs['pk'])
        return anct


class AnnouncementCreateView(CreateAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementUploadSerializer


class ItemCreateView(CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemUploadSerializer


class AnnouncementUpdateView(UpdateAPIView):
    serializer_class = AnnouncementUploadSerializer

    def get_queryset(self):
        anct = Announcement.objects.filter(pk=self.kwargs['pk'])
        return anct


class ItemUpdateView(UpdateAPIView):
    serializer_class = ItemUploadSerializer

    def get_queryset(self):
        item = Item.objects.filter(pk=self.kwargs['pk'])
        return item


class VoteListView(ListAPIView):
    serializer_class = VoteSerializer

    def get_queryset(self):
        if self.kwargs['user'] is not None:
            vote = Vote.objects.filter(item=self.kwargs['item'],
                                       user=self.kwargs['user'])
        else:
            vote = Vote.objects.filter(item=self.kwargs['item'])
        return vote


class VoteCreateView(CreateAPIView):
    queryset = Vote.objects.all()
    serializer_class = VoteSerializer


class VoteUpdateView(UpdateAPIView):
    serializer_class = VoteUpdateSerializer

    def get_queryset(self):
        vote = Vote.objects.filter(item=self.kwargs['item'],
                                   user=self.kwargs['user'])
        return vote
