# -*- coding: UTF-8 -*-
from django.conf import settings
from django.core.mail import send_mail


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


def send_mail_to_winner_action(artist, item):
    try:
        subject = 'Freeven :: Ganador de convocatoria'
        body_text = 'Estimado ' + artist.user.first_name + ', \n\n'
        body_text = body_text + 'Lo queremos felicitar por ser el ganador '
        body_text = body_text + 'de la categoria ' + item.name
        body_text = body_text + ' de la convocatoria ' + item.announcement.name
        body_text = body_text + '. \n\nPor favor comunicarse con el agente '
        body_text = body_text + 'comercial responsable.'
        body_text = body_text + '\n\nCordial saludo,'

        send_mail(subject, body_text, settings.EMAIL_HOST_USER,
                  [artist.user.email], fail_silently=False)
        return True
    except:
        print("NO ENVIADO")
        return False
