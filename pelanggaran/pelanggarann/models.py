from django.db import models
from sekolah.models import Sekolah
from petugas.models import Petugas
from siswa.models import Siswa
from kategori_pelanggaran.models import Kategori

# Create your models here.
class Pelanggarann(models.Model):
    SekolahId = models.ForeignKey(Sekolah, on_delete=models.CASCADE)
    TglJam = models.DateTimeField()
    PetugasId = models.ForeignKey(Petugas, on_delete=models.CASCADE)
    SiswaId = models.ForeignKey(Siswa, on_delete=models.CASCADE)
    KategoriId = models.ForeignKey(Kategori, on_delete=models.CASCADE)
    Poin = models.IntegerField()
    Catatan = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return f"{self.SiswaId.Nama} - {self.SekolahId.Nama} - {self.KategoriId.Nama}  "

    class Meta:
        db_table = 'pelanggarann'  # Pastikan nama tabel sudah benar dan tidak ada pengulangan