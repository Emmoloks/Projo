from rest_framework import serializers
from .models import (
    User, Category, Product, Order, OrderItem, Cart, CartItem,
    Vendor, Review, Coupon, Vendor, Refund, Blog, Shipping, Payment,
    Wishlist, Notification, Blog, Contact, Analytics, Configuration,
    Subscription, Refund, Tax
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff']
        read_only_fields = ['id', 'is_active', 'is_staff']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']
        read_only_fields = ['id']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'description', 'price', 'category', 'image', 'is_active']
        read_only_fields = ['id']

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'price']
        read_only_fields = ['id']

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    order_items = OrderItemSerializer(many=True, read_only=True, source='order_items')

    class Meta:
        model = Order
        fields = ['id', 'user', 'vendor', 'order_items', 'total_price', 'shipping_address', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'price']
        read_only_fields = ['id']

class CartSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    cart_items = CartItemSerializer(many=True, read_only=True, source='cart_items')

    class Meta:
        model = Cart
        fields = ['id', 'user', 'session_id', 'cart_items', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'name', 'email', 'phone', 'address']
        read_only_fields = ['id']

class ReviewSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'product', 'user', 'rating', 'comment', 'created_at']
        read_only_fields = ['id', 'created_at']

class CouponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coupon
        fields = ['id', 'code', 'discount_type', 'discount_value', 'start_date', 'end_date', 'is_active']
        read_only_fields = ['id']

class ShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipping
        fields = ['id', 'name', 'description', 'rating']
        read_only_fields = ['id']

class PaymentSerializer(serializers.ModelSerializer):
    order = OrderSerializer(read_only=True)

    class Meta:
        model = Payment
        fields = ['id', 'order', 'amount', 'payment_method', 'amount_paid', 'transaction_id', 'status', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class WishlistSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    products = ProductSerializer(many=True, read_only=True, source='wishlist_items')

    class Meta:
        model = Wishlist
        fields = ['id', 'user', 'products', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class NotificationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'is_read', 'created_at']
        read_only_fields = ['id', 'created_at']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'slug', 'content', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']

class AnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = ['id', 'page_views', 'unique_visitors', 'bounce_rate', 'created_at']
        read_only_fields = ['id', 'created_at']

class ConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Configuration
        fields = ['id', 'site_name', 'site_description', 'contact_email', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class SubscriptionSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Subscription
        fields = ['id', 'user', 'email', 'start_date', 'end_date', 'is_active', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class RefundSerializer(serializers.ModelSerializer):
    order = OrderSerializer(read_only=True)

    class Meta:
        model = Refund
        fields = ['id', 'order', 'amount', 'reason', 'status', 'created_at', 'updated_at', 'requested_at', 'processed_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class TaxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tax
        fields = ['id', 'name', 'rate', 'country', 'state', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'slug', 'content', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


# Note: The serializers above assume that the models are defined in the same way as shown in the previous code snippets.
# Adjust the fields and relationships as necessary based on your actual model definitions.