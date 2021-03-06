# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-08-29 06:20
from __future__ import unicode_literals
from yats.shortcuts import convert_sarch, clean_search_values

from django.db import migrations
from django.core.serializers.json import DjangoJSONEncoder

import json

def convertOldStyleSearch(apps, schema_editor):
    reports = apps.get_model('yats', 'tickets_reports')
    for rep in reports.objects.all():
        search = json.loads(rep.search)
        rep.search = json.dumps(convert_sarch(clean_search_values(search)), cls=DjangoJSONEncoder)
        rep.save()

class Migration(migrations.Migration):

    dependencies = [
        ('yats', '0011_auto_20180823_1843'),
    ]

    operations = [
        migrations.RunPython(convertOldStyleSearch),
    ]
