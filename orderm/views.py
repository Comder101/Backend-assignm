
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from .models import *
from django.shortcuts import render,redirect
from django.http import HttpResponse

from .serializers import ItemSerializer, CartItemSerializer

@api_view(['GET'])
def item_list(request):
    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)


from rest_framework import generics


class ItemListView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetailsView(generics.RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class AddToCartView(generics.CreateAPIView):
    serializer_class = CartItemSerializer

    def create(self, request, *args, **kwargs):
        item_id = request.data.get('item')
        try:
            item = Item.objects.get(pk=item_id)
        except Item.DoesNotExist:
            return Response({"error": "Item not found"}, status=404)
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(item=item)
        return Response(serializer.data)

class RemoveFromCartView(generics.DestroyAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

class CartListView(generics.ListAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

class SearchItemsView(generics.ListAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        if query:
            return Item.objects.filter(title__icontains=query) 
        else:
            return Item.objects.none()  
        
class AddItemView(generics.CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class RemoveItemView(generics.DestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class EditItemView(generics.UpdateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


# Create your views here.
