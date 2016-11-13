from django.shortcuts import render
from .models import Announcement, Item
from .serializers import (AnnouncementSerializer, AnnouncementUploadSerializer,
                          ItemUploadSerializer, AnnouncementFullSerializer)
from rest_framework import filters
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView


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
