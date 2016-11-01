from __future__ import absolute_import
from celery import task
from tracks.models import Top, Track
from tracks.trace_manager import TraceManager


@task()
def top10():
    Top.objects.filter(top_type="daily").delete()
    trace = TraceManager()
    top10 = trace.top10()
    for top_track in top10:
        track = Track.objects.get(id=top_track['_id']['track'])
        top_register = Top(
            quantity=top_track['count'],
            track=track,
            action=top_track['_id']['action'],
            top_type="daily",
        )
        top_register.save()
