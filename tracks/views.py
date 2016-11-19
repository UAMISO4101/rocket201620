import json
from django.http import JsonResponse
from rest_framework.generics import ListAPIView, CreateAPIView
from .models import Track, Top, Gender, Playlist
from .serializers import (
    TrackSerializer,  TopSerializer, TrackUploadSerializer, GenderSerializer,
    PlaylistSerializer, PlaylistFullSerializer
)
from rest_framework import filters
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .trace_manager import TraceManager
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from tracks.business_logic import (
    register_rate_track_action, add_track_playlist_action
)


class GenderListView(ListAPIView):
    queryset = Gender.objects.filter(state=True)
    serializer_class = GenderSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = (
        'id',
        'name',
        'description',
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


class TrackForArtisticListView(ListAPIView):
    serializer_class = TrackSerializer

    def get_queryset(self):
        tracks = Track.objects.filter(artist_id=self.kwargs['artist_id'])
        return tracks


class Top10(ListAPIView):
    queryset = Top.objects.filter(
        top_type='daily', action='play').order_by('-quantity')[:10]
    serializer_class = TopSerializer


class TrackCreateView(CreateAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackUploadSerializer


@csrf_exempt
def register_rate_track(request):
    if request.user.is_authenticated():
        if request.method == 'GET':
            response = register_rate_track_action(request)
            return JsonResponse(response)
    else:
        return redirect(reverse('track'))


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


@api_view(['POST'])
def trace(request):
    trace = TraceManager()
    trace.insert(
        request.data['user'],
        request.data['track'],
        request.data['artist'],
        request.data['action'],
        get_client_ip(request),
    )
    return Response(status=status.HTTP_201_CREATED)


class PlaylistCreateView(CreateAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer


class PlaylistListView(ListAPIView):
    serializer_class = PlaylistFullSerializer

    def get_queryset(self):
        playlist = Playlist.objects.filter(user__id=self.kwargs['user_id'])
        return playlist


@csrf_exempt
def add_track_playlist(request):
    if request.method == 'POST':
        json_data = json.loads(request.body.decode('utf-8'))
        print("PASO 1")
        response = add_track_playlist_action(json_data)
        return JsonResponse(response, safe=False)
    else:
        status = "Incorrect method."
        return JsonResponse(status, safe=False)
