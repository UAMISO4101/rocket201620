###Freeven
###Clonar el repositorio y configurar los credenciales

```
git clone "https://github.com/UAMISO4101/rocket201620.git"
cd freeven
git config user.name "{{your user}}"
git config user.email "{{your email}}"
git config credential.helper store
git pull
```

###Demo:
https://freeven-srv-dev.herokuapp.com


### Para ejecutar en local
```
python manage.py runserver --settings=freeven.settings.dev
```

### Para correr celery
```
celery -A freeven worker --loglevel=info
```

stage-integration
