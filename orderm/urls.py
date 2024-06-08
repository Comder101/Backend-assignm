
from django.urls import path

from .views import *

urlpatterns = [
      
      path('items/', item_list, name='item_list'),
      path('cart/', CartListView.as_view(),name='cart_list'),
      path('cart/add/', AddToCartView.as_view(), name='add_to_cart'),
      path('cart/remove/<int:pk>/', RemoveFromCartView.as_view(), name='remove_from_cart'),
      path('search-items/', SearchItemsView.as_view(), name='search_items'),
      path('items/add/', AddItemView.as_view(), name='add_item'),
      path('items/remove/<int:pk>/', RemoveItemView.as_view(), name='remove_item'),
      path('items/edit/<int:pk>/', EditItemView.as_view(), name='edit_item'),
      path('items/<int:pk>/', ItemDetailsView.as_view(), name='item-details'),
]

