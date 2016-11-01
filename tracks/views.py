from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.viewsets import ModelViewSet
from .models import Track
from .serializers import TrackSerializer, TrackUploadSerializer
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
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


class TrackCreateView(CreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackUploadSerializer
    permission_classes = (IsAuthenticated,)


@csrf_exempt
def register_rate_track(request):
    if request.user.is_authenticated():
        if request.method == 'GET':
            response = register_rate_track_action(request)
            return JsonResponse(response)
    else:
        return redirect(reverse('track'))
