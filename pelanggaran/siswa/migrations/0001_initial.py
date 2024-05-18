# Generated by Django 5.0.6 on 2024-05-16 03:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('kelas', '0001_initial'),
        ('sekolah', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Siswa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('NIS', models.CharField(max_length=20)),
                ('Nama', models.CharField(max_length=100)),
                ('NamaOrtu', models.CharField(max_length=100)),
                ('HpOrtu', models.CharField(max_length=13)),
                ('EmailOrtu', models.EmailField(max_length=254)),
                ('Catatan', models.CharField(blank=True, max_length=200, null=True)),
                ('KelasId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='kelas.kelas')),
                ('SekolahId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sekolah.sekolah')),
            ],
        ),
    ]
