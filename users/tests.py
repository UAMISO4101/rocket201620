'''import json

from django.test import TestCase
from django.test.client import Client


class CreateUserTest(TestCase):
    def setUp(self):
        """initialize the Django test users"""
        self.client = Client()

    def test_create_user(self):
        json_user = {
            'first_name': 'Diego',
            'last_name': 'Ruiz',
            'username': 'algo',
            'password1': 'lolo',
            'password2': 'lolo',
            'email': 'diego@pruebas.com'
        }
        self.response = self.client.post('/user/create/',
                                         json.dumps(json_user),
                                         content_type='application/json',
                                         )
        self.assertEqual(self.response.status_code, 'OK usuario creado')
'''
