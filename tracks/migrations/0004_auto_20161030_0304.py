# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-10-30 08:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0003_auto_20161030_0304'),
    ]

    operations = [
        migrations.AlterField(
            model_name='track',
            name='score',
            field=models.DecimalField(decimal_places=1, max_digits=2),
        ),
    ]
