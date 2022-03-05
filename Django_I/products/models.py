from django.db import models
from django.urls import reverse

# Create your models here.

class Product(models.Model):
    title = models.CharField(max_length=120) #required
    description = models.TextField(blank=True, null=True) #check Django models docs
    price = models.DecimalField(decimal_places=2, max_digits=10)
    summary = models.TextField(default='this is cool')
    # change after creation
    featured = models.BooleanField(default=True) #null=True, default=True
        
    def get_absolute_url(self):
        return reverse("products:product-detail", kwargs={"id": self.id}) #f"/products/{self.id}/"