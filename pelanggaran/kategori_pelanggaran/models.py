from django.db import models
from sekolah.models import Sekolah

# Create your models here.
class Kategori(models.Model):
    SekolahId = models.ForeignKey(Sekolah, on_delete=models.CASCADE, related_name='sekolah')
    Nama = models.CharField(max_length=100)
    Poin = models.IntegerField()
    Pesan = models.CharField(max_length=100)
    Catatan = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.Nama

    class Meta:
        db_table = 'kategori_pelanggaran'  # Pastikan nama tabel sudah benar dan tidak ada pengulangan
        #app_label = 'pelanggaran_kategori'
        #verbose_name_plural = 'Pelanggaran_Kategori'

                               
