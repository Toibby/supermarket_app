import type {
  Category,
  Customer,
  Order,
  OrderItem,
  Payment,
  Product,
  ProductImage,
  Profile
} from "@supermarket/shared";

export function mapCategory(row: any): Category {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description,
    imageUrl: row.image_url,
    isActive: row.is_active,
    sortOrder: row.sort_order,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export function mapProductImage(row: any): ProductImage {
  return {
    id: row.id,
    productId: row.product_id,
    imageUrl: row.image_url,
    altText: row.alt_text,
    isPrimary: row.is_primary,
    sortOrder: row.sort_order,
    createdAt: row.created_at
  };
}

export function mapProduct(row: any): Product {
  return {
    id: row.id,
    categoryId: row.category_id,
    name: row.name,
    slug: row.slug,
    description: row.description,
    sku: row.sku,
    barcode: row.barcode,
    price: Number(row.price),
    compareAtPrice: row.compare_at_price !== null ? Number(row.compare_at_price) : null,
    stockQuantity: row.stock_quantity,
    lowStockThreshold: row.low_stock_threshold,
    status: row.status,
    featured: row.featured,
    thumbnailUrl: row.thumbnail_url,
    weightGrams: row.weight_grams,
    createdBy: row.created_by,
    updatedBy: row.updated_by,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    category: row.categories ? mapCategory(row.categories) : null,
    images: Array.isArray(row.product_images) ? row.product_images.map(mapProductImage) : []
  };
}

export function mapProfile(row: any): Profile {
  return {
    id: row.id,
    email: row.email,
    fullName: row.full_name,
    phone: row.phone,
    avatarUrl: row.avatar_url,
    role: row.role,
    isActive: row.is_active,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export function mapCustomer(row: any): Customer {
  return {
    id: row.id,
    email: row.email,
    fullName: row.full_name,
    phone: row.phone,
    addressLine1: row.address_line_1,
    addressLine2: row.address_line_2,
    city: row.city,
    state: row.state,
    country: row.country,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export function mapOrderItem(row: any): OrderItem {
  return {
    id: row.id,
    orderId: row.order_id,
    productId: row.product_id,
    productName: row.product_name,
    productSku: row.product_sku,
    unitPrice: Number(row.unit_price),
    quantity: row.quantity,
    subtotal: Number(row.subtotal),
    createdAt: row.created_at
  };
}

export function mapPayment(row: any): Payment {
  return {
    id: row.id,
    orderId: row.order_id,
    amount: Number(row.amount),
    status: row.status,
    method: row.method,
    transactionReference: row.transaction_reference,
    paidAt: row.paid_at,
    createdAt: row.created_at
  };
}

export function mapOrder(row: any): Order {
  return {
    id: row.id,
    customerId: row.customer_id,
    orderNumber: row.order_number,
    status: row.status,
    paymentStatus: row.payment_status,
    subtotal: Number(row.subtotal),
    deliveryFee: Number(row.delivery_fee),
    discountAmount: Number(row.discount_amount),
    totalAmount: Number(row.total_amount),
    notes: row.notes,
    deliveryAddressLine1: row.delivery_address_line_1,
    deliveryAddressLine2: row.delivery_address_line_2,
    deliveryCity: row.delivery_city,
    deliveryState: row.delivery_state,
    deliveryCountry: row.delivery_country,
    createdByWorkerId: row.created_by_worker_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    items: Array.isArray(row.order_items) ? row.order_items.map(mapOrderItem) : [],
    payments: Array.isArray(row.payments) ? row.payments.map(mapPayment) : []
  };
}