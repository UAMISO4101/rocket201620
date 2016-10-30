from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.shortcuts import render, redirect
from tracks.models import Gender
from users.models import BusinessAgent
from django.views.generic import ListView, TemplateView, UpdateView, CreateView
from django.core.urlresolvers import reverse
from users.business_logic import (
    register_business_agent, update_business_agent
)


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


@method_decorator(login_required, name='dispatch')
def businessAgentUpdate(request):
    if request.user.is_authenticated():
        return redirect(reverse('agent-list'))

    mensaje = ''
    if request.method == 'POST':
        mensaje = update_business_agent(request)
        if mensaje == '':
            return redirect(reverse('manager'))
    return render(request, 'businessAgent_update.html', {'mensaje': mensaje})
