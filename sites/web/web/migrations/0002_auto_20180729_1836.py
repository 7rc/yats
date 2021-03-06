# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-07-29 16:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='billing_estimated_time',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='test',
            name='billing_time_taken',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='test',
            name='billing_type',
            field=models.CharField(blank=True, choices=[(b'service', b'service'), (b'development', b'development')], max_length=255, null=True),
        ),
    ]
