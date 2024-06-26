# Generated by Django 5.0.6 on 2024-05-16 03:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sekolah',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nama', models.CharField(max_length=225)),
                ('Alamat', models.TextField(max_length=225)),
                ('Kota', models.CharField(max_length=225)),
                ('NoTelp', models.CharField(max_length=13)),
                ('Email', models.EmailField(max_length=254)),
                ('Website', models.URLField()),
                ('Catatan', models.TextField(blank=True, max_length=225, null=True)),
            ],
        ),
    ]
