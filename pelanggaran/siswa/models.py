from django.db import models
from sekolah.models import Sekolah
from kelas.models import Kelas

# Create your models here.
class Siswa(models.Model):
    SekolahId = models.ForeignKey(Sekolah, on_delete=models.CASCADE)
    NIS = models.CharField(max_length=20)
    Nama = models.CharField(max_length=100)
    KelasId = models.ForeignKey(Kelas, on_delete=models.CASCADE)
    NamaOrtu = models.CharField(max_length=100)
    HpOrtu = models.CharField(max_length=13)
    EmailOrtu = models.EmailField()
    Catatan = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.Nama

    class Meta:
        db_table = 'siswa'  # Pastikan nama tabel sudah benar dan tidak ada pengulangan