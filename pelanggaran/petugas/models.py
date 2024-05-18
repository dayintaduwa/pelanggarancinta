from django.db import models
from sekolah.models import Sekolah

# Create your models here.
class Petugas(models.Model):
    SekolahId = models.ForeignKey(Sekolah, on_delete=models.CASCADE)
    Nama = models.CharField(max_length=100)
    Jabatan = models.CharField(max_length=50)
    NoHp = models.CharField(max_length=13)
    Email = models.EmailField()
    Catatan = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.Nama

    class Meta:
        db_table = 'petugas'  # Pastikan nama tabel sudah benar dan tidak ada pengulangan
