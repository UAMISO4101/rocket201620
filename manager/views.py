from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from tracks.models import Gender
from users.models import BusinessAgent, Artist, Donation
from django.contrib.auth.models import User
from django.views.generic import ListView, TemplateView, UpdateView, CreateView
from django.core.urlresolvers import reverse
from users.business_logic import (
    register_business_agent, update_business_agent
)
from users.security import StaffuserRequiredMixin
from tracks.trace_manager import TraceManager


class IndexView(StaffuserRequiredMixin, TemplateView):
    login_url = '/manager/login/'
    redirect_field_name = 'redirect_to'

    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        trace_manager = TraceManager()
        top_artists = trace_manager.top_artist_played()
        artists = []
        if len(top_artists) > 0:
            for artist in top_artists:
                artists.append({
                    "name": Artist.objects.only('user__first_name').get(
                                                id=artist['_id']['artist']),
                    "quantity": artist['count']
                })

        context['artists'] = artists
        return context


class GenderListView(StaffuserRequiredMixin, ListView):
    login_url = '/manager/login/'
    redirect_field_name = 'redirect_to'

    model = Gender
    template_name = 'gender_list.html'
    context_object_name = 'genders'


class GenderCreateView(StaffuserRequiredMixin, CreateView):
    login_url = '/manager/login/'
    redirect_field_name = 'redirect_to'

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


class GenderUpdateView(StaffuserRequiredMixin, UpdateView):
    login_url = '/manager/login/'
    redirect_field_name = 'redirect_to'

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


class BusinessAgentListView(StaffuserRequiredMixin, ListView):
    login_url = '/manager/login/'
    redirect_field_name = 'redirect_to'

    model = BusinessAgent
    template_name = 'businessAgent_list.html'
    context_object_name = 'agents'


@csrf_exempt
def businessAgentCreate(request):
    if request.user.is_authenticated() and request.user.is_staff:
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
    if request.user.is_authenticated() and request.user.is_staff:
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


@method_decorator(staff_member_required, name='dispatch')
class UserListView(ListView):
    model = User
    template_name = 'user_list.html'
    context_object_name = 'users'


@method_decorator(staff_member_required, name='dispatch')
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


@method_decorator(staff_member_required, name='dispatch')
class ArtistDonationListView(ListView):
    template_name = 'artist-donation-list.html'
    context_object_name = 'donations'

    def get_queryset(self):
        start_date = self.request.GET.get('start_date')
        end_date = self.request.GET.get('end_date')
        gender = self.request.GET.get('gender')

        queryset = Donation.objects.all()
        if start_date and end_date:
            if self.request.GET.get('gender'):
                queryset = Donation.objects.filter(
                    artist__in=Artist.objects.filter(
                        track__gender=self.request.GET.get('gender')
                    )
                ).filter(
                    date__range=(start_date, end_date)
                )
            else:
                queryset = Donation.objects.filter(
                    date__range=(start_date, end_date)
                )
        else:
            if gender:
                queryset = Donation.objects.filter(
                    artist__in=Artist.objects.filter(
                        track__gender=self.request.GET.get('gender')
                    )
                )
        return queryset

    def get_context_data(self, **kwargs):
        context = super(ArtistDonationListView,
                        self).get_context_data(**kwargs)
        context['genders'] = Gender.objects.all()
        context['start_date'] = self.request.GET.get('start_date')
        context['end_date'] = self.request.GET.get('end_date')
        context['gender'] = self.request.GET.get('gender')
        return context
