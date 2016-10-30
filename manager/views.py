from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from tracks.models import Gender
from users.models import Artist
from django.views.generic import ListView, TemplateView, UpdateView, CreateView
from bson import json_util
from bson.json_util import dumps

from django.core.urlresolvers import reverse

from tracks.trace_manager import TraceManager


@method_decorator(login_required, name='dispatch')
class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        trace_manager = TraceManager()
        top_artists = trace_manager.top_artist_played()
        artists = []
        for artist in top_artists:
            artists.append({
                "name": Artist.objects.only('user__username').get(id=artist['_id']['artist']),
                "quantity": artist['count']
            })

        context['artists'] = artists
        return context


@method_decorator(login_required, name='dispatch')
class GenderListView(ListView):
    model = Gender
    template_name = 'gender_list.html'
    context_object_name = 'genders'


@method_decorator(login_required, name='dispatch')
class GenderCreateView(CreateView):
    model = Gender
    template_name = 'gender_create.html'
    context_object_name = 'gender'
    fields = [
        'name',
        'description',
        'state',
    ]

    def get_success_url(self):
        return reverse('gender-list')


@method_decorator(login_required, name='dispatch')
class GenderUpdateView(UpdateView):
    model = Gender
    template_name = 'gender_update.html'
    context_object_name = 'gender'
    fields = [
        'name',
        'description',
        'state',
    ]

    def get_success_url(self):
        return reverse('gender-list')
