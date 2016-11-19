# -*- coding: UTF-8 -*-
from tracks.models import Track
from .models import Item


def particitate_announcement_action(json_data):
    anct_id = json_data['idAnnouncement']

    status = "OK"
    for relation in json_data['relations']:
        item_id = relation['idItem']
        try:
            item = Item.objects.get(announcement__id=anct_id, id=item_id)
            try:
                track_id = relation['idTrack']
                track = Track.objects.get(id=track_id)
                item.tracks.add(track)
            except:
                if status != 'OK':
                    status = ', '
                else:
                    status = ""
                status = status + 'Obra musical no encontrada, Id: ' + track_id
        except:
            status = 'Categoria no encontrada en la convocatoria.'
    return status
