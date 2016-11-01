from __future__ import absolute_import
from .celery import app as celery_app
import os

os.environ['CELERY_CONFIG_MODULE'] = 'freeven.celeryconfig'
