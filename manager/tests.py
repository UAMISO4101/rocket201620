'''
from django.test import TestCase
from django.contrib.auth.models import User
from users.models import BusinessAgent


class BusinessAgentTest(TestCase):

    def setUp(self):
        user = User.objects.create_user(
            username="jparra",
            password="Freeven8888.",
            email="jparra@uniandes.edu.co",
            first_name="Jose",
            last_name="Parra")
        agent = BusinessAgent.objects.create(address="Cll 32 13-07",
                                             city="Bogota DC",
                                             country="Colombia",
                                             telephone_number="340-2501",
                                             user=user)

    def test_country_by_username(self):
        agent = BusinessAgent.objects.get(user__username="jparra")
        self.assertEqual(agent.country, "Colombia")

    def test_address_by_username(self):
        agent = BusinessAgent.objects.get(user__username="jparra")
        self.assertEqual(agent.address, "Cll 32 13-07")

    def test_city_by_email(self):
        agent = BusinessAgent.objects.get(user__email="jparra@uniandes.edu.co")
        self.assertEqual(agent.city, "Bogota DC")

    def test_last_name_by_username(self):
        user = User.objects.get(username="jparra")
        self.assertEqual(user.last_name, "Parra")

    def test_update_country_by_username(self):
        agent = BusinessAgent.objects.get(user__username="jparra")
        agent.country = "Cuba"
        agent.save()

        agent = BusinessAgent.objects.get(user__id=agent.id)
        self.assertEqual(agent.country, "Cuba")
'''