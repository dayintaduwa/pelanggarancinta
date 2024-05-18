from django.db import models
from sekolah.models import Sekolah

# Create your models here.
class Kelas(models.Model):
    SekolahId = models.ForeignKey(Sekolah, on_delete=models.CASCADE, null=True)
    Nama = models.CharField(max_length=225, null=True)
    Tingkat = models.IntegerField()
    Catatan = models.CharField(max_length=225, null=True)

    def __str__(self):
        return self.Nama

    class Meta:
        db_table = 'kelas'  # Pastikan nama tabel sudah benar dan tidak ada pengulangan
