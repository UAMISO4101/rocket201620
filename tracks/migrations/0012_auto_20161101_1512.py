# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-11-01 20:12
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0011_merge_20161031_2223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='top',
            name='track',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='track', to='tracks.Track'),
        ),
    ]
