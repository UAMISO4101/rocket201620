# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-10-30 08:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0008_auto_20161030_0307'),
    ]

    operations = [
        migrations.AlterField(
            model_name='track',
            name='score',
            field=models.IntegerField(default=0),
        ),
    ]
