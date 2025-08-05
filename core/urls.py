from django.urls import path, include
from rest_framework import routers
from .views import (
    UserViewSet, CategoryViewSet, ProductViewSet, OrderViewSet,
    OrderItemViewSet, CartViewSet, CartItemViewSet,
    VendorViewSet, ReviewViewSet, CouponViewSet, RefundViewSet,
    BlogViewSet, ShippingViewSet, PaymentViewSet,
    WishlistViewSet, NotificationViewSet, ContactViewSet,
    AnalyticsViewSet, ConfigurationViewSet, SubscriptionViewSet,
    TaxViewSet
)

router = routers.Defaultrouter