import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from users.business_logic import (
    register_user_in_model, get_info_users, login_service
)
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

'''
    user
    Servicio REST para el manejo de usuarios.
    Param: GET, POST, PUT, DELETE
'''


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

'''
    login_user
    Servicio REST para la autenticacion de usuarios Django.
    Param: GET, POST, PUT, DELETE
'''


@csrf_exempt
def login_user(request):
    if request.method == 'GET':
        response = login_service(request)
        return JsonResponse(response)
