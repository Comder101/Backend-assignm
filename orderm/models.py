
from django.db import models

class Item(models.Model):
    handle = models.CharField(max_length=255, default='')
    title = models.CharField(max_length=255, default='')
    body = models.TextField(default='', null=True)
    vendor = models.CharField(max_length=255, default='')
    type = models.CharField(max_length=255, default='')
    variant_price = models.DecimalField(max_digits=10, decimal_places=2, default=0,null=True)
    image_src = models.URLField(default='')

    def __str__(self):
        return self.title
    
class CartItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    # quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.item.title}"



# Create your models here.
