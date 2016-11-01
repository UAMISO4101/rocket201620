from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from tracks.models import Gender
from users.models import BusinessAgent, Artist
from django.contrib.auth.models import User
from django.views.generic import ListView, TemplateView, UpdateView, CreateView
from django.core.urlresolvers import reverse
from users.business_logic import (
    register_business_agent, update_business_agent
)

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


@method_decorator(login_required, name='dispatch')
class BusinessAgentListView(ListView):
    model = BusinessAgent
    template_name = 'businessAgent_list.html'
    context_object_name = 'agents'


@csrf_exempt
def businessAgentCreate(request):
    if request.user.is_authenticated():
        mensaje = ''
        if request.method == 'POST':
            mensaje = register_business_agent(request)
            if mensaje == '':
                return redirect(reverse('agent-list'))
        return render(request,
                      'businessAgent_create.html', {'mensaje': mensaje})
    else:
        return redirect(reverse('manager'))


@csrf_exempt
def businessAgentUpdate(request, pk):
    if request.user.is_authenticated():
        mensaje = ''
        if request.method == 'POST':
            mensaje = update_business_agent(request, pk)
            if mensaje == '':
                return redirect(reverse('agent-list'))
        elif request.method == 'GET':
            agent = BusinessAgent.objects.get(user__id=pk)
            return render(request, 'businessAgent_update.html',
                          {'mensaje': mensaje, 'agent': agent})
    else:
        return redirect(reverse('manager'))


@method_decorator(login_required, name='dispatch')
class UserListView(ListView):
    model = User
    template_name = 'user_list.html'
    context_object_name = 'users'


@method_decorator(login_required, name='dispatch')
class UserUpdateView(UpdateView):
    model = User
    template_name = 'user_update.html'
    context_object_name = 'user'
    fields = [
        'first_name',
        'last_name',
        'email',
        'is_active',
    ]

    def get_success_url(self):
        return reverse('user-list')
