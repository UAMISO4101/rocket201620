###Freeven 
###Clonar el repositorio y configurar los credenciales

```
git clone "https://github.com/Rocket-Team/Freeven-srv.git"
cd freeven
git config user.name "{{your user}}"
git config user.email "{{your email}}"
git config credential.helper store
git pull
```

###Demo:
https://freeven.herokuapp.com


### Para ejecutar en local
```
python manage.py runserver --settings=freeven.settings.dev

```
