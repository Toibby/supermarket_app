// import type { Category, Order, Product, Profile, Customer } from "@supermarket/shared";
// import { createClient } from "@/lib/supabase/server";
// import { mapCategory, mapCustomer, mapOrder, mapProduct, mapProfile } from "@/lib/mappers";

// export async function getStoreCategories(): Promise<Category[]> {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("categories")
//     .select("*")
//     .eq("is_active", true)
//     .order("sort_order", { ascending: true });

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   return (data ?? []).map(mapCategory);
// }

// export async function getStoreProducts(categorySlug?: string): Promise<Product[]> {
//   const supabase = await createClient();

//   let query = supabase
//     .from("products")
//     .select(`
//       *,
//       categories (*),
//       product_images (*)
//     `)
//     .eq("status", "active")
//     .order("created_at", { ascending: false });

//   if (categorySlug) {
//     const { data: category } = await supabase
//       .from("categories")
//       .select("id")
//       .eq("slug", categorySlug)
//       .single();

//     if (!category) return [];
//     query = query.eq("category_id", category.id);
//   }

//   const { data, error } = await query;

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   return (data ?? []).map(mapProduct);
// }

// export async function getProductBySlug(slug: string): Promise<Product | null> {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("products")
//     .select(`
//       *,
//       categories (*),
//       product_images (*)
//     `)
//     .eq("slug", slug)
//     .eq("status", "active")
//     .single();

//   if (error) {
//     console.error(error);
//     return null;
//   }

//   return mapProduct(data);
// }

// export async function getCurrentProfile(): Promise<Profile | null> {
//   const supabase = await createClient();

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (!user) return null;

//   const { data, error } = await supabase
//     .from("profiles")
//     .select("*")
//     .eq("id", user.id)
//     .single();

//   if (error || !data) {
//     console.error(error);
//     return null;
//   }

//   return mapProfile(data);
// }

// export async function getCurrentCustomer(): Promise<Customer | null> {
//   const supabase = await createClient();

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (!user) return null;

//   const { data, error } = await supabase
//     .from("customers")
//     .select("*")
//     .eq("id", user.id)
//     .single();

//   if (error || !data) {
//     console.error(error);
//     return null;
//   }

//   return mapCustomer(data);
// }

// export async function getCurrentCustomerOrders(): Promise<Order[]> {
//   const supabase = await createClient();

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (!user) return [];

//   const { data, error } = await supabase
//     .from("orders")
//     .select(`
//       *,
//       order_items (*),
//       payments (*)
//     `)
//     .eq("customer_id", user.id)
//     .order("created_at", { ascending: false });

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   return (data ?? []).map(mapOrder);
// }

import type { Category, Order, Product, Profile, Customer } from "@supermarket/shared";
import { createClient } from "@/lib/supabase/server";
import { mapCategory, mapCustomer, mapOrder, mapProduct, mapProfile } from "@/lib/mappers";

export async function getStoreCategories(): Promise<Category[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []).map(mapCategory);
}

export async function getStoreProducts(categorySlug?: string): Promise<Product[]> {
  const supabase = await createClient();

  let categoryId: string | null = null;

  if (categorySlug) {
    const { data: category, error: categoryError } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", categorySlug)
      .single();

    if (categoryError || !category) {
      console.error(categoryError);
      return [];
    }

    categoryId = category.id;
  }

  let query = supabase
    .from("products")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (categoryId) {
    query = query.eq("category_id", categoryId);
  }

  const { data: products, error } = await query;

  if (error) {
    console.error(error);
    return [];
  }

  if (!products?.length) return [];

  const productIds = products.map((p) => p.id);

  const [{ data: categories }, { data: images }] = await Promise.all([
    supabase.from("categories").select("*"),
    supabase
      .from("product_images")
      .select("*")
      .in("product_id", productIds)
      .order("sort_order", { ascending: true })
  ]);

  return products.map((productRow) =>
    mapProduct({
      ...productRow,
      categories: (categories ?? []).find((c) => c.id === productRow.category_id) ?? null,
      product_images: (images ?? []).filter((img) => img.product_id === productRow.id)
    })
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const supabase = await createClient();

  const { data: productRow, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .eq("status", "active")
    .single();

  if (error || !productRow) {
    console.error(error);
    return null;
  }

  const [{ data: category }, { data: images }] = await Promise.all([
    supabase
      .from("categories")
      .select("*")
      .eq("id", productRow.category_id)
      .single(),
    supabase
      .from("product_images")
      .select("*")
      .eq("product_id", productRow.id)
      .order("sort_order", { ascending: true })
  ]);

  return mapProduct({
    ...productRow,
    categories: category ?? null,
    product_images: images ?? []
  });
}

export async function getCurrentProfile(): Promise<Profile | null> {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error || !data) {
    console.error(error);
    return null;
  }

  return mapProfile(data);
}

export async function getCurrentCustomer(): Promise<Customer | null> {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error || !data) {
    console.error(error);
    return null;
  }

  return mapCustomer(data);
}

export async function getCurrentCustomerOrders(): Promise<Order[]> {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("orders")
    .select(`
      *,
      order_items (*),
      payments (*)
    `)
    .eq("customer_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? []).map(mapOrder);
}