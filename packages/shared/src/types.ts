// export type UserRole = "customer" | "admin" | "manager" | "cashier";

// export type ProductStatus = "active" | "draft" | "archived";
// export type OrderStatus =
//   | "pending"
//   | "confirmed"
//   | "processing"
//   | "delivered"
//   | "cancelled";

// export interface Category {
//   id: string;
//   name: string;
//   slug: string;
//   description?: string | null;
//   imageUrl?: string | null;
//   isActive: boolean;
//   createdAt?: string;
// }

// export interface ProductImage {
//   id: string;
//   productId: string;
//   imageUrl: string;
//   altText?: string | null;
//   isPrimary: boolean;
//   sortOrder: number;
// }

// export interface Product {
//   id: string;
//   categoryId: string;
//   name: string;
//   slug: string;
//   description: string;
//   price: number;
//   compareAtPrice?: number | null;
//   sku: string;
//   stockQuantity: number;
//   status: ProductStatus;
//   featured: boolean;
//   thumbnailUrl?: string | null;
//   images?: ProductImage[];
//   category?: Category;
//   createdAt?: string;
// }

// export interface CartItem {
//   productId: string;
//   name: string;
//   slug: string;
//   price: number;
//   quantity: number;
//   imageUrl?: string | null;
//   stockQuantity: number;
// }

// export interface Customer {
//   id: string;
//   email: string;
//   fullName: string;
//   phone?: string | null;
//   address?: string | null;
// }

// export interface OrderItem {
//   id: string;
//   orderId: string;
//   productId: string;
//   productName: string;
//   unitPrice: number;
//   quantity: number;
//   subtotal: number;
// }

// export interface Order {
//   id: string;
//   customerId: string;
//   orderNumber: string;
//   status: OrderStatus;
//   subtotal: number;
//   deliveryFee: number;
//   totalAmount: number;
//   paymentStatus: "pending" | "paid" | "failed" | "refunded";
//   createdAt: string;
//   items?: OrderItem[];
// }

// export interface Profile {
//   id: string;
//   email: string;
//   fullName: string;
//   role: UserRole;
//   isActive: boolean;
// }

// export interface Worker {
//   id: string;
//   profileId: string;
//   employeeCode: string;
//   role: Extract<UserRole, "admin" | "manager" | "cashier">;
//   isActive: boolean;
//   hiredAt?: string;
// }

// export interface ApiResponse<T> {
//   success: boolean;
//   message: string;
//   data: T;
// }


// export type UserRole = "customer" | "admin" | "manager" | "cashier";

// export type ProductStatus = "active" | "draft" | "archived";

// export type OrderStatus =
//   | "pending"
//   | "confirmed"
//   | "processing"
//   | "delivered"
//   | "cancelled";

// export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

// export type PaymentMethod = "cash" | "card" | "transfer" | "wallet" | "pos";

// export type InventoryAction =
//   | "restock"
//   | "sale"
//   | "adjustment"
//   | "return"
//   | "damaged";

// export interface Category {
//   id: string;
//   name: string;
//   slug: string;
//   description?: string | null;
//   imageUrl?: string | null;
//   isActive: boolean;
//   sortOrder?: number;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export interface ProductImage {
//   id: string;
//   productId: string;
//   imageUrl: string;
//   altText?: string | null;
//   isPrimary: boolean;
//   sortOrder: number;
//   createdAt?: string;
// }

// export interface Product {
//   id: string;
//   categoryId: string;
//   name: string;
//   slug: string;
//   description: string;
//   sku: string;
//   barcode?: string | null;
//   price: number;
//   compareAtPrice?: number | null;
//   stockQuantity: number;
//   lowStockThreshold: number;
//   status: ProductStatus;
//   featured: boolean;
//   thumbnailUrl?: string | null;
//   weightGrams?: number | null;
//   createdBy?: string | null;
//   updatedBy?: string | null;
//   createdAt?: string;
//   updatedAt?: string;
//   category?: Category;
//   images?: ProductImage[];
// }

// export interface Customer {
//   id: string;
//   email: string;
//   fullName: string;
//   phone?: string | null;
//   addressLine1?: string | null;
//   addressLine2?: string | null;
//   city?: string | null;
//   state?: string | null;
//   country?: string | null;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export interface Profile {
//   id: string;
//   email: string;
//   fullName: string;
//   phone?: string | null;
//   avatarUrl?: string | null;
//   role: UserRole;
//   isActive: boolean;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export interface Worker {
//   id: string;
//   profileId: string;
//   employeeCode: string;
//   role: Extract<UserRole, "admin" | "manager" | "cashier">;
//   hiredAt?: string;
//   isActive: boolean;
//   createdAt?: string;
//   updatedAt?: string;
//   profile?: Profile;
// }

// export interface Order {
//   id: string;
//   customerId: string;
//   orderNumber: string;
//   status: OrderStatus;
//   paymentStatus: PaymentStatus;
//   subtotal: number;
//   deliveryFee: number;
//   discountAmount: number;
//   totalAmount: number;
//   notes?: string | null;
//   deliveryAddressLine1?: string | null;
//   deliveryAddressLine2?: string | null;
//   deliveryCity?: string | null;
//   deliveryState?: string | null;
//   deliveryCountry?: string | null;
//   createdByWorkerId?: string | null;
//   createdAt: string;
//   updatedAt?: string;
//   items?: OrderItem[];
//   payments?: Payment[];
// }

// export interface OrderItem {
//   id: string;
//   orderId: string;
//   productId: string;
//   productName: string;
//   productSku: string;
//   unitPrice: number;
//   quantity: number;
//   subtotal: number;
//   createdAt?: string;
// }

// export interface Payment {
//   id: string;
//   orderId: string;
//   amount: number;
//   status: PaymentStatus;
//   method: PaymentMethod;
//   transactionReference?: string | null;
//   paidAt?: string | null;
//   createdAt?: string;
// }

// export interface InventoryLog {
//   id: string;
//   productId: string;
//   action: InventoryAction;
//   quantityChange: number;
//   previousQuantity: number;
//   newQuantity: number;
//   reason?: string | null;
//   performedBy?: string | null;
//   orderId?: string | null;
//   createdAt?: string;
// }

// export interface ApiResponse<T> {
//   success: boolean;
//   message: string;
//   data: T;
// }



export type UserRole = "customer" | "admin" | "manager" | "cashier";

export type ProductStatus = "active" | "draft" | "archived";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "delivered"
  | "cancelled";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type PaymentMethod = "cash" | "card" | "transfer" | "wallet" | "pos";

export type InventoryAction =
  | "restock"
  | "sale"
  | "adjustment"
  | "return"
  | "damaged";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  isActive: boolean;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  altText?: string | null;
  isPrimary: boolean;
  sortOrder: number;
  createdAt?: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  sku: string;
  barcode?: string | null;
  price: number;
  compareAtPrice?: number | null;
  stockQuantity: number;
  lowStockThreshold: number;
  status: ProductStatus;
  featured: boolean;
  thumbnailUrl?: string | null;
  weightGrams?: number | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt?: string;
  updatedAt?: string;
  category?: Category | null;
  images?: ProductImage[];
}

export interface Customer {
  id: string;
  email: string;
  fullName: string;
  phone?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Profile {
  id: string;
  email: string;
  fullName: string;
  phone?: string | null;
  avatarUrl?: string | null;
  role: UserRole;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Worker {
  id: string;
  profileId: string;
  employeeCode: string;
  role: Extract<UserRole, "admin" | "manager" | "cashier">;
  hiredAt?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
  profile?: Profile;
}

export interface Order {
  id: string;
  customerId: string;
  orderNumber: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  subtotal: number;
  deliveryFee: number;
  discountAmount: number;
  totalAmount: number;
  notes?: string | null;
  deliveryAddressLine1?: string | null;
  deliveryAddressLine2?: string | null;
  deliveryCity?: string | null;
  deliveryState?: string | null;
  deliveryCountry?: string | null;
  createdByWorkerId?: string | null;
  createdAt: string;
  updatedAt?: string;
  items?: OrderItem[];
  payments?: Payment[];
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  productSku: string;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  createdAt?: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  status: PaymentStatus;
  method: PaymentMethod;
  transactionReference?: string | null;
  paidAt?: string | null;
  createdAt?: string;
}

export interface InventoryLog {
  id: string;
  productId: string;
  action: InventoryAction;
  quantityChange: number;
  previousQuantity: number;
  newQuantity: number;
  reason?: string | null;
  performedBy?: string | null;
  orderId?: string | null;
  createdAt?: string;
}

export interface CartItem {
  productId: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  imageUrl?: string | null;
  stockQuantity: number;
}

export interface AuthUserSummary {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
}

export interface CheckoutPayload {
  deliveryAddressLine1: string;
  deliveryAddressLine2?: string;
  deliveryCity: string;
  deliveryState: string;
  deliveryCountry?: string;
  phone?: string;
  notes?: string;
  paymentMethod: PaymentMethod;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}