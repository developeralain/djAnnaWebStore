from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    

class Painting(models.Model):
    PAINTING_CHOICES = [    (None, 'No selection'), ('Landscape', 'Landscape'),    ('Abstract', 'Abstract'),  ('Rainforest', 'Rainforest'),  ('Flowers', 'Flowers'),    ]
    PAINTING_SUBTYPES = [    (None, 'No selection'), ('France', 'France'),    ('North America', 'North America'),]

    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='paintings/')
    painting_type = models.CharField(max_length=50, choices=PAINTING_CHOICES,null=True, blank=True)
    painting_subtype = models.CharField(max_length=50, choices=PAINTING_SUBTYPES, null=True, blank=True)
    is_spring = models.BooleanField(default=False)
    is_summer = models.BooleanField(default=False)
    is_fall = models.BooleanField(default=False)
    is_winter = models.BooleanField(default=False)
    year_created = models.IntegerField(blank=True, null=True)
    price_original = models.DecimalField(max_digits=10, decimal_places=2)
    dimensions = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    original_available = models.BooleanField(default=True)


    def __str__(self):
        return self.title
    
class PaintingPhoto(models.Model):
    painting = models.ForeignKey(Painting, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='painting_photos/')

