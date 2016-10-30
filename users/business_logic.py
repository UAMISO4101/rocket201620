# -*- coding: UTF-8 -*-
from django.contrib.auth.models import User
from users.models import Artist, BusinessAgent
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token


'''
    get_info_users
    Este médodo permite retornar todos los usuarios
    Param: GET.
'''


def get_info_users(request):
    if request.method == 'GET':
        users = []

        users_all = User.objects.all()

        for user in users_all:
            users.append(user_to_json(user))

        return users


'''
    user_to_json
    Este médodo permite transformar un usuario en json
    Param: usuario.
'''


def user_to_json(user):
    json_data = {
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email
    }

    return json_data


'''
    register_user_in_model
    Este médodo permite registrar un usuario
    Param: datos del usuario.
'''


def register_user_in_model(json_data):
    first_name = json_data['first_name']
    last_name = json_data['last_name']
    username = json_data['username']
    password1 = json_data['password1']
    password2 = json_data['password2']
    email = json_data['email']
    is_artist = json_data['is_artist']

    is_artist = str_to_bool(is_artist)

    if (username != "" and password1 != "" and password2 != ""
        and email != "" and first_name != "" and last_name != ""):

        exist_user = User.objects.filter(username=username)

        if exist_user.count() > 0:
            status = 'Usuario ya existe.'
        else:
            if password1 != password2:
                status = 'Las contrasenias no coinciden.'
            else:

                user_model = User.objects.create_user(username=username, password=password1, email=email,
                                                      first_name=first_name, last_name=last_name)
                user_model.save()

                if is_artist is False:
                    status = 'OK'
                else:
                    if is_artist:
                        if relation_user_to_artist(user_model, json_data):
                            status = 'OK'
                        else:
                            status = 'Error guardando el perfil del usuario como artista'''
    else:
        status = 'Todos los campos son obligatorios.'

    return {'status': status}


'''
    str_to_bool
    Este médodo permite transformar un str a bool
    Param: str
'''


def str_to_bool(s):
    if s == 'True':
        return True
    elif s == 'False':
        return False
    else:
        raise ValueError  # evil ValueError that doesn't tell you what the wrong value was


'''
    relation_user_to_artist
    Este médodo permite asociar al modelo de usuario, el perfil de un artista.
    Param: usuario, datos del perfil
'''


def relation_user_to_artist(user_model, json_data):
    user_artist = Artist()

    artistic_name = json_data['artistic_name']
    # avatar = request.FILES['avatar']
    bank_account_number = json_data['bank_account_number']
    bank_account_type = json_data['bank_account_type']
    bank = json_data['bank']
    address = json_data['address']
    city = json_data['city']
    country = json_data['country']
    telephone_number = json_data['telephone_number']
    birth_date = json_data['birth_date']

    user_artist.artistic_name = artistic_name
    user_artist.avatar = ""
    user_artist.bank_account_number = bank_account_number
    user_artist.bank_account_type = bank_account_type
    user_artist.bank = bank
    user_artist.address = address
    user_artist.city = city
    user_artist.country = country
    user_artist.telephone_number = telephone_number
    user_artist.birth_date = birth_date

    user_artist.user = user_model

    user_artist.save()

    return True


'''
    login_service
    Este médodo permite registrar un usuario
    Param: datos del usuario.
'''


def login_service(request):
     username = request.GET.get('username')
     password = request.GET.get('password')

     if (username is not None and password is not None):
         user = authenticate(username=username, password=password)
         if user is not None:
             login(request, user)
             return login_user_to_json(user)
         else:
             status = 'Usuario o clave incorrecta.'
     else:
         status = 'Todos los campos son obligatorios.'
     return {'status': status}


'''
    login_user_to_json
    Este médodo permite transformar un usuario autenticado en json
    Param: usuario.
'''


def login_user_to_json(user):
    is_artist = False
    try:
        artist = Artist.objects.get(user__id=user.id)
        if artist is not None:
            is_artist = True
        token = Token.objects.create(user=user)
    except:
        token = Token.objects.get(user=user)

    json_data = {
        'first_name': user.first_name,
        'last_name': user.last_name,
        'username': user.username,
        'email': user.email,
        'token': token.key,
        'is_artist': is_artist,
    }
    return json_data


def register_business_agent(request):

    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    password1 = request.POST.get('password1')
    password2 = request.POST.get('password2')

    if(username is not "" and password1 is not "" and password2 is not ""
       and email is not "" and first_name is not "" and
       last_name is not ""):

        exist_user = User.objects.filter(username=username)
        if exist_user.count() > 0:
            status = 'Usuario ya existe.'
        else:
            if password1 != password2:
                status = 'Las contraseñas no coinciden.'
            else:
                user = User.objects.create_user(
                    username=username,
                    password=password1,
                    email=email,
                    first_name=first_name,
                    last_name=last_name)
                user.save()

                if create_business_agent(user, request):
                    status = ''
                else:
                    status = 'Error guardando el agente comercial.'
    else:
        status = 'Todos los campos son obligatorios.'
    return status


def create_business_agent(user, request):
    agent = BusinessAgent()

    agent.telephone_number = request.POST.get('telephone_number')
    agent.avatar = request.POST.get('avatar')
    agent.address = request.POST.get('address')
    agent.city = request.POST.get('city')
    agent.country = request.POST.get('country')
    agent.user = user

    agent.save()
    return True


def update_business_agent(request, id_user):

    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    email = request.POST.get('email')

    print(id_user)

    if(email is not "" and first_name is not "" and last_name is not ""):

        user = User.objects.get(id=id_user)
        if user is None:
            status = 'Usuario no existe.'
        else:
            user.email = email
            user.first_name = first_name
            user.last_name = last_name
            user.save()

            if update_business_agent_process(user, request):
                status = ''
            else:
                status = 'Error guardando el agente comercial.'
    else:
        status = 'Todos los campos son obligatorios.'
    return status


def update_business_agent_process(user, request):
    agent = BusinessAgent.objects.get(user__id=user.id)

    agent.telephone_number = request.POST.get('telephone_number')
    agent.avatar = request.POST.get('avatar')
    agent.address = request.POST.get('address')
    agent.city = request.POST.get('city')
    agent.country = request.POST.get('country')
    agent.birth_date = request.POST.get('birth_date')
    agent.user = user

    agent.save()
    return True
