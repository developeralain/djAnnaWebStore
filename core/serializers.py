from rest_framework import serializers
from .models import Painting, Customer

class PaintingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Painting 
        fields = ('pk', 'title', 'image', 'painting_type', 'painting_subtype', 'is_spring', 'is_summer', 'is_fall', 'is_winter', 'year_created', 'price_original', 'dimensions', 'description', 'created_at', 'updated_at', 'original_available')

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer 
        fields = ('pk', 'name', 'email', 'phone_number', 'address', 'city', 'state', 'zip_code', 'country', 'created_at', 'updated_at')