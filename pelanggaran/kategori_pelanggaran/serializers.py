from rest_framework import serializers
from kategori_pelanggaran.models import Kategori

class KategoriSerializers(serializers.ModelSerializer):
    class Meta :
        model = Kategori
        fields = "__all__"