from selenium import webdriver
from unittest import TestCase

__autor__ = 'Rocket Team'


class FuncionalTest(TestCase):
    def setUp(self):
        self.browser = webdriver.Chrome("/Users/jose/Downloads/chromedriver")

    def tearDown(self):
        self.browser.quit()

    def test_gender_create(self):
        self.browser.get('http://localhost:8000/manager/logout')
        self.browser.get('http://localhost:8000/manager/')

        username = self.browser.find_element_by_name('username')
        username.send_keys('admin')

        password = self.browser.find_element_by_name('password')
        password.send_keys('jose123*')

        link = self.browser.find_element_by_id('login')
        link.click()

        link = self.browser.find_element_by_id('genders')
        link.click()

        link = self.browser.find_element_by_id('add_gender')
        link.click()

        gendername = self.browser.find_element_by_name('name')
        gendername.send_keys('Vallenato')

        gendername = self.browser.find_element_by_name('description')
        gendername.send_keys('Bien Chevre')

        link = self.browser.find_element_by_id('create_gender')
        link.click()

        gendernametext = ""

        for row in self.browser.find_elements_by_css_selector("tr.gradeX"):
            cell = row.find_elements_by_tag_name("td")[0]
            if "Vallenato" == cell.text:
                gendernametext = cell.text

        self.assertIn('Vallenato', gendernametext)