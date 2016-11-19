
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import Announcement, Item, Vote
from .serializers import (AnnouncementSerializer, AnnouncementUploadSerializer,
                          ItemUploadSerializer, AnnouncementFullSerializer,
                          VoteSerializer, VoteUpdateSerializer,
                          ParticipateSerializer, SelectWinnerSerializer,
                          ItemSerializer, ItemFullSerializer)
from .business_logic import particitate_announcement_action
from rest_framework import filters
from rest_framework.generics import (ListAPIView, CreateAPIView, UpdateAPIView)
from tracks.models import Track


class AnnouncementListView(ListAPIView):
    queryset = Announcement.objects.all().order_by('-start_date')
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


class AnnouncementUpdateView(UpdateAPIView):
    serializer_class = AnnouncementUploadSerializer

    def get_queryset(self):
        anct = Announcement.objects.filter(pk=self.kwargs['pk'])
        return anct


class ItemListView(ListAPIView):
    serializer_class = ItemFullSerializer

    def get_queryset(self):
        items = Item.objects.filter(announcement_id=self.kwargs['anct_id'])
        return items


class ItemCreateView(CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemUploadSerializer


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


class ParticipateView(UpdateAPIView):
    serializer_class = ParticipateSerializer

    def get_queryset(self):
        item = Item.objects.filter(pk=self.kwargs['pk'])
        return item


@csrf_exempt
def particitate_announcement(request):
    if request.method == 'POST':
        json_data = json.loads(request.body.decode('utf-8'))
        response = particitate_announcement_action(json_data)
        return JsonResponse(response, safe=False)
    else:
        status = "Incorrect method."
        return JsonResponse(status, safe=False)


class SelectWinnerView(UpdateAPIView):
    serializer_class = SelectWinnerSerializer

    def get_queryset(self):
        item = Item.objects.filter(pk=self.kwargs['pk'])
        return item
