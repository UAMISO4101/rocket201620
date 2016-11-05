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


master-integration


TravisCI Build Status
[![Build Status](https://travis-ci.org/UAMISO4101/rocket201620.svg?branch=development)](https://travis-ci.org/UAMISO4101/rocket201620)


Codacy
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/585e1194afa94447a4b665fa7a11f890)](https://www.codacy.com/app/f-arruza/rocket201620?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=UAMISO4101/rocket201620&amp;utm_campaign=Badge_Grade)
