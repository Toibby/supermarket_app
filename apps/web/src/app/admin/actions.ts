"use server";

import { revalidatePath } from "next/cache";
import { requireStaff } from "@/lib/admin";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

function toText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function createCategoryAction(formData: FormData) {
  await requireStaff(["admin", "manager"]);
  const supabase = await createClient();

  const name = toText(formData.get("name"));
  const slug = toText(formData.get("slug"));
  const description = toText(formData.get("description"));
  const imageUrl = toText(formData.get("imageUrl"));
  const sortOrder = Number(formData.get("sortOrder") || 0);

  await supabase.from("categories").insert({
    name,
    slug,
    description: description || null,
    image_url: imageUrl || null,
    sort_order: sortOrder,
    is_active: true
  });

  revalidatePath("/admin/categories");
  revalidatePath("/shop");
  revalidatePath("/");
}

export async function createProductAction(formData: FormData) {
  const profile = await requireStaff(["admin", "manager"]);
  const supabase = await createClient();

  const name = toText(formData.get("name"));
  const slug = toText(formData.get("slug"));
  const description = toText(formData.get("description"));
  const sku = toText(formData.get("sku"));
  const categoryId = toText(formData.get("categoryId"));
  const thumbnailUrl = toText(formData.get("thumbnailUrl"));
  const price = Number(formData.get("price") || 0);
  const compareAtPrice = toText(formData.get("compareAtPrice"));
  const stockQuantity = Number(formData.get("stockQuantity") || 0);
  const lowStockThreshold = Number(formData.get("lowStockThreshold") || 5);
  const featured = formData.get("featured") === "on";
  const status = toText(formData.get("status")) || "active";

  const { data: product } = await supabase
    .from("products")
    .insert({
      category_id: categoryId,
      name,
      slug,
      description,
      sku,
      price,
      compare_at_price: compareAtPrice ? Number(compareAtPrice) : null,
      stock_quantity: stockQuantity,
      low_stock_threshold: lowStockThreshold,
      featured,
      status,
      thumbnail_url: thumbnailUrl || null,
      created_by: profile.id,
      updated_by: profile.id
    })
    .select()
    .single();

  if (product && thumbnailUrl) {
    await supabase.from("product_images").insert({
      product_id: product.id,
      image_url: thumbnailUrl,
      alt_text: name,
      is_primary: true,
      sort_order: 0
    });
  }

  revalidatePath("/admin/products");
  revalidatePath("/shop");
  revalidatePath("/");
}

export async function updateOrderStatusAction(formData: FormData) {
  await requireStaff(["admin", "manager", "cashier"]);
  const supabase = await createClient();

  const orderId = toText(formData.get("orderId"));
  const status = toText(formData.get("status"));
  const paymentStatus = toText(formData.get("paymentStatus"));

  await supabase
    .from("orders")
    .update({
      status,
      payment_status: paymentStatus
    })
    .eq("id", orderId);

  revalidatePath("/admin/orders");
  revalidatePath("/orders");
}

export async function restockProductAction(formData: FormData) {
  const profile = await requireStaff(["admin", "manager"]);
  const supabase = await createClient();

  const productId = toText(formData.get("productId"));
  const quantity = Number(formData.get("quantity") || 0);
  const reason = toText(formData.get("reason")) || "Admin restock";

  await supabase.rpc("restock_product", {
    p_product_id: productId,
    p_quantity: quantity,
    p_reason: reason,
    p_performed_by: profile.id
  });

  revalidatePath("/admin/inventory");
  revalidatePath("/admin/dashboard");
  revalidatePath("/shop");
}

export async function createWorkerAction(formData: FormData) {
  await requireStaff(["admin"]);
  const adminClient = createAdminClient();

  const fullName = toText(formData.get("fullName"));
  const email = toText(formData.get("email"));
  const password = toText(formData.get("password"));
  const role = toText(formData.get("role"));
  const employeeCode = toText(formData.get("employeeCode"));

  let profileId: string | null = null;

  const { data: existingProfile } = await adminClient
    .from("profiles")
    .select("*")
    .eq("email", email)
    .maybeSingle();

  if (existingProfile) {
    profileId = existingProfile.id;
  } else {
    const { data: createdUser, error: createUserError } =
      await adminClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: {
          full_name: fullName
        }
      });

    if (createUserError || !createdUser.user) {
      throw new Error(createUserError?.message ?? "Unable to create worker user");
    }

    profileId = createdUser.user.id;

    await adminClient.from("profiles").upsert({
      id: profileId,
      email,
      full_name: fullName,
      role,
      is_active: true
    });

    await adminClient.from("customers").delete().eq("id", profileId);
  }

  await adminClient
    .from("profiles")
    .update({
      full_name: fullName,
      role,
      is_active: true
    })
    .eq("id", profileId);

  const { data: existingWorker } = await adminClient
    .from("workers")
    .select("*")
    .eq("profile_id", profileId)
    .maybeSingle();

  if (existingWorker) {
    await adminClient
      .from("workers")
      .update({
        employee_code: employeeCode,
        role,
        is_active: true
      })
      .eq("id", existingWorker.id);
  } else {
    await adminClient.from("workers").insert({
      profile_id: profileId,
      employee_code: employeeCode,
      role,
      is_active: true
    });
  }

  revalidatePath("/admin/workers");
  revalidatePath("/admin/dashboard");
}

export async function toggleWorkerStatusAction(formData: FormData) {
  await requireStaff(["admin"]);
  const adminClient = createAdminClient();

  const workerId = toText(formData.get("workerId"));
  const profileId = toText(formData.get("profileId"));
  const nextStatus = toText(formData.get("nextStatus")) === "true";

  await adminClient
    .from("workers")
    .update({
      is_active: nextStatus
    })
    .eq("id", workerId);

  await adminClient
    .from("profiles")
    .update({
      is_active: nextStatus
    })
    .eq("id", profileId);

  revalidatePath("/admin/workers");
  revalidatePath("/admin/dashboard");
}