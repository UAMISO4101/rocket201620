from rest_framework.generics import ListAPIView
from .models import Track
from .serializers import TrackSerializer
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from tracks.business_logic import (
    register_rate_track_action
)


class TrackListView(ListAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = (
        'name',
        'gender__name',
        'artist__user__username',
    )


@csrf_exempt
def register_rate_track(request):
    permission_classes = (IsAuthenticated,)

    if request.method == 'GET':
        response = register_rate_track_action(request)
        return JsonResponse(response)
