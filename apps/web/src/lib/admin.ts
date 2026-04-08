import { redirect } from "next/navigation";
import type { OrderStatus, UserRole } from "@supermarket/shared";
import { createClient } from "@/lib/supabase/server";
import {
  mapCategory,
  mapCustomer,
  mapOrder,
  mapProduct,
  mapProfile
} from "@/lib/mappers";

const STAFF_ROLES: UserRole[] = ["admin", "manager", "cashier"];

export async function requireStaff(allowedRoles?: UserRole[]) {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile || !STAFF_ROLES.includes(profile.role)) {
    redirect("/");
  }

  if (allowedRoles && !allowedRoles.includes(profile.role)) {
    redirect("/admin/dashboard");
  }

  return mapProfile(profile);
}

export async function getAdminDashboardData() {
  const supabase = await createClient();

  const [ordersRes, productsRes, customersRes, workersRes, lowStockRes] =
    await Promise.all([
      supabase.from("orders").select("*"),
      supabase.from("products").select("*"),
      supabase.from("customers").select("*"),
      supabase.from("workers").select("*"),
      supabase
        .from("products")
        .select("*")
        .lte("stock_quantity", 5)
        .order("stock_quantity", { ascending: true })
    ]);

  const orders = ordersRes.data ?? [];
  const products = productsRes.data ?? [];
  const customers = customersRes.data ?? [];
  const workers = workersRes.data ?? [];
  const lowStock = (lowStockRes.data ?? []).map(mapProduct);

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const todaySales = orders
    .filter((order) => new Date(order.created_at) >= todayStart)
    .reduce((sum, order) => sum + Number(order.total_amount), 0);

  return {
    todaySales,
    ordersCount: orders.length,
    productsCount: products.length,
    customersCount: customers.length,
    workersCount: workers.length,
    lowStock
  };
}

export async function getAdminProducts() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("products")
    .select(`
      *,
      categories (*),
      product_images (*)
    `)
    .order("created_at", { ascending: false });

  return (data ?? []).map(mapProduct);
}

export async function getAdminCategories() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order", { ascending: true });

  return (data ?? []).map(mapCategory);
}

export async function getAdminOrders() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("orders")
    .select(`
      *,
      order_items (*),
      payments (*)
    `)
    .order("created_at", { ascending: false });

  return (data ?? []).map(mapOrder);
}

export async function getAdminCustomers() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  return (data ?? []).map(mapCustomer);
}

export async function getAdminWorkers() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("workers")
    .select(`
      *,
      profiles (*)
    `)
    .order("created_at", { ascending: false });

  return (data ?? []).map((row: any) => ({
    id: row.id,
    profileId: row.profile_id,
    employeeCode: row.employee_code,
    role: row.role,
    hiredAt: row.hired_at,
    isActive: row.is_active,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    profile: row.profiles ? mapProfile(row.profiles) : undefined
  }));
}

export async function getInventoryRows() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("products")
    .select(`
      *,
      categories (*)
    `)
    .order("stock_quantity", { ascending: true });

  return (data ?? []).map(mapProduct);
}

export async function getAnalyticsSummary() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  const orders = data ?? [];

  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  const sumSince = (date: Date) =>
    orders
      .filter((order) => new Date(order.created_at) >= date)
      .reduce((sum, order) => sum + Number(order.total_amount), 0);

  const countStatus = (status: OrderStatus) =>
    orders.filter((order) => order.status === status).length;

  return {
    todaySales: sumSince(startOfToday),
    weekSales: sumSince(startOfWeek),
    monthSales: sumSince(startOfMonth),
    yearSales: sumSince(startOfYear),
    totalOrders: orders.length,
    pendingOrders: countStatus("pending"),
    processingOrders: countStatus("processing"),
    deliveredOrders: countStatus("delivered"),
    cancelledOrders: countStatus("cancelled")
  };
}