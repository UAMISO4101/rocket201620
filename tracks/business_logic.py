# -*- coding: UTF-8 -*-
from django.contrib.auth.models import User
from tracks.models import Track, RateTrack, Playlist
from django.db.models import Avg


def register_rate_track_action(request):
    username = request.GET.get('username')
    track_id = request.GET.get('track_id')
    rate = request.GET.get('rate')

    if (username is not None and track_id is not None and rate is not None):
        try:
            if(int(rate) < 1 or int(rate) > 5):
                status = 'Calificacion no valida.'
            else:
                try:
                    user = User.objects.get(username=username)
                    try:
                        track = Track.objects.get(id=track_id)

                        try:
                            r_track = RateTrack.objects.get(user__id=user.id,
                                                            track__id=track.id)
                        except:
                            r_track = RateTrack()
                            r_track.user = user
                            r_track.track = track

                        r_track.rate = rate
                        r_track.save()

                        count_votes = RateTrack.objects.filter(
                            track__id=track.id).count()

                        score = RateTrack.objects.filter(
                            track__id=track.id
                        ).aggregate(Avg('rate'))['rate__avg']

                        track.score = score
                        track.count_votes = count_votes
                        track.save()

                        status = 'La calificacion fue registrada.'
                    except ValueError:
                        print(ValueError)
                        status = 'La obra musical no existe.'
                except:
                    status = 'Usuario no existe.'
        except:
            status = 'Error en formato de calificacion.'
    else:
        status = 'Todos los campos son obligatorios.'
    return {'status': status}


def add_track_playlist_action(json_data):
    track_id = json_data['idTrack']
    playlist_id = json_data['idList']

    print(track_id)
    print(playlist_id)

    status = "OK"
    try:
        playlist = Playlist.objects.get(id=playlist_id)
        print(playlist)
        try:
            track = Track.objects.get(id=track_id)
            playlist.tracks.add(track)
        except:
            status = status + 'Obra musical no encontrada.'
    except:
        status = 'Lista de Reproduccion no encontrada.'
    return status
