# Generated by Django 5.0.4 on 2024-05-02 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orderm', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='name',
        ),
        migrations.RemoveField(
            model_name='item',
            name='price',
        ),
        migrations.RemoveField(
            model_name='item',
            name='sku',
        ),
        migrations.AddField(
            model_name='item',
            name='body',
            field=models.TextField(default='', null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='handle',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='image_src',
            field=models.URLField(default=''),
        ),
        migrations.AddField(
            model_name='item',
            name='option1_name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='option1_value',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='option2_name',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='option2_value',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='option3_name',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='option3_value',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='tags',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='title',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='type',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_compare_at_price',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_fulfillment_service',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_grams',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_inventory_policy',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_inventory_qty',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_inventory_tracker',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='item',
            name='variant_sku',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='item',
            name='vendor',
            field=models.CharField(default='', max_length=255),
        ),
    ]
