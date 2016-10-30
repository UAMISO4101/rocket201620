from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.viewsets import ModelViewSet
from .models import Track
from .serializers import TrackSerializer, TrackUploadSerializer
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated


class TrackListView(ListAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = (
        'name',
        'gender__name',
        'artist__user__username',
    )


class TrackCreateView(CreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackUploadSerializer
    permission_classes = (IsAuthenticated,)
