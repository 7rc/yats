# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-08-23 12:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yats', '0007_tickets_reports_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickets',
            name='uuid',
            field=models.CharField(max_length=255),
        ),
    ]
