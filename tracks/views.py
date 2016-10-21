from rest_framework.generics import ListAPIView
from .models import Track
from .serializers import TrackSerializer
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
