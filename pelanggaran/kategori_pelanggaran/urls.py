from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from rest_framework import routers
from .views import Kategori_PelanggaranViewSet

router = routers.DefaultRouter()
router.register(r'api/kategori',
Kategori_PelanggaranViewSet, 'kategori')

urlpatterns = [ path('admin/', admin.site.urls), path('', include(router.urls)) ]