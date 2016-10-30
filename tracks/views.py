from rest_framework.generics import ListAPIView
from .models import Track, Top
from .serializers import TrackSerializer, TopSerializer
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .trace_manager import TraceManager


class TrackListView(ListAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = (
        'name',
        'gender__name',
        'artist__user__username',
    )


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


class Top10(ListAPIView):
    queryset = Top.objects.filter(
        top_type='daily', action='play').order_by('-quantity')[:10]
    serializer_class = TopSerializer
