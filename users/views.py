import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect
from django.core.urlresolvers import reverse
from users.business_logic import (
    register_user_in_model, get_info_users, login_service,
    request_password_restore_action, change_password_action,
    update_profile_action, change_password_op_action
)
from rest_framework.generics import CreateAPIView
from .models import Donation, Artist
from .serializers import DonationSerializer, ArtistSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveAPIView


#     user
#     Servicio REST para el manejo de usuarios.
#     Param: GET, POST, PUT, DELETE


@csrf_exempt
def user(request):
    if request.method == 'POST':
        json_data = json.loads(request.body.decode('utf-8'))
        response = register_user_in_model(json_data)
        # response = register_user_in_model_post(request)
        return JsonResponse(response)
    if request.method == 'GET':
        response = get_info_users(request)
        return JsonResponse(response, safe=False)


@csrf_exempt
def login_user(request):
    if request.method == 'GET':
        response = login_service(request)
        return JsonResponse(response)


class Donate(CreateAPIView):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = (IsAuthenticated,)


class DonationList(ListAPIView):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = (filters.DjangoFilterBackend, )
    filter_fields = (
        'artist__id',
    )


class ArtistRetrieveView(RetrieveAPIView):
    serializer_class = ArtistSerializer

    def get_queryset(self):
        artist = Artist.objects.filter(pk=self.kwargs['pk'])
        return artist


@csrf_exempt
def request_password_restore(request):
    if request.method == 'GET':
        response = request_password_restore_action(request)
        return JsonResponse(response)


@csrf_exempt
def change_password(request):
    if request.method == 'GET':
        response = change_password_action(request)
        return JsonResponse(response)


@csrf_exempt
def change_password_op(request):
    if request.user.is_authenticated():
        if request.method == 'GET':
            response = change_password_op_action(request)
            return JsonResponse(response)
    else:
        return redirect(reverse('user'))


@csrf_exempt
def update_profile(request):
    if request.user.is_authenticated():
        if request.method == 'POST':
            json_data = json.loads(request.body.decode('utf-8'))
            response = update_profile_action(json_data)
            return JsonResponse(response)
    else:
        return redirect(reverse('user'))
