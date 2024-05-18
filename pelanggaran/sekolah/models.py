from django.db import models

# Create your models here.
class Sekolah(models.Model):
    Nama = models.CharField(max_length=225)
    Alamat = models.TextField(max_length=225)
    Kota = models.CharField(max_length=225)
    Provinsi = models.CharField(max_length=225, null=True)
    NoTelp = models.CharField(max_length=13)
    Email = models.EmailField()
    Website = models.URLField()
    Catatan = models.TextField(blank=True, null=True, max_length=225)

    def __str__(self):
        return self.Nama

    class Meta:
        db_table = 'sekolah'  # Pastikan nama tabel sudah benar dan tidak ada pengulangan