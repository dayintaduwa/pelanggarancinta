from django.shortcuts import render
from rest_framework import viewsets
from .serializers import KategoriSerializers
from .models import Kategori

# Create your views here.
class Kategori_PelanggaranViewSet(viewsets.ModelViewSet):
    serializer_class = KategoriSerializers
    queryset = Kategori.objects.all()