from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from tracks.models import Gender
from users.models import BusinessAgent
from django.views.generic import ListView, TemplateView, UpdateView, CreateView

from django.core.urlresolvers import reverse


@method_decorator(login_required, name='dispatch')
class IndexView(TemplateView):
    template_name = 'index.html'


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


@method_decorator(login_required, name='dispatch')
class BusinessAgentCreateView(CreateView):
    model = BusinessAgent
    template_name = 'businessAgent_create.html'
    context_object_name = 'agent'
    fields = [
        'user',
        'telephone_number',
        'avatar',
        'address',
        'city',
        'country',
        'birth_date',
    ]

    def get_success_url(self):
        return reverse('agent-list')


@method_decorator(login_required, name='dispatch')
class BusinessAgentUpdateView(UpdateView):
    model = BusinessAgent
    template_name = 'businessAgent_update.html'
    context_object_name = 'agent'
    fields = [
        'username',
        'first_name',
        'last_name',
        'email',
        'telephone_number',
        'avatar',
        'address',
        'city',
        'country',
        'birth_date',
    ]

    def get_success_url(self):
        return reverse('agent-list')
