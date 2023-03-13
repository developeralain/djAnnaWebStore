from django.contrib import admin
from .models import Painting, PaintingPhoto

# Register your models here.

admin.site.register(Painting)
admin.site.register(PaintingPhoto)