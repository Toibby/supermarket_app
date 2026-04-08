// "use server";

// import { redirect } from "next/navigation";
// import type { CheckoutPayload } from "@supermarket/shared";
// import { createClient } from "@/lib/supabase/server";

// function toText(value: FormDataEntryValue | null) {
//   return typeof value === "string" ? value.trim() : "";
// }

// export async function loginAction(formData: FormData) {
//   const supabase = await createClient();

//   const email = toText(formData.get("email"));
//   const password = toText(formData.get("password"));

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password
//   });

//   if (error) {
//     return { success: false, message: error.message };
//   }

//   redirect("/");
// }

// export async function registerAction(formData: FormData) {
//   const supabase = await createClient();

//   const fullName = toText(formData.get("fullName"));
//   const email = toText(formData.get("email"));
//   const phone = toText(formData.get("phone"));
//   const password = toText(formData.get("password"));

//   const { error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         full_name: fullName
//       }
//     }
//   });

//   if (error) {
//     return { success: false, message: error.message };
//   }

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (user) {
//     await supabase
//       .from("customers")
//       .update({
//         full_name: fullName,
//         phone
//       })
//       .eq("id", user.id);

//     await supabase
//       .from("profiles")
//       .update({
//         full_name: fullName,
//         phone
//       })
//       .eq("id", user.id);
//   }

//   redirect("/account");
// }

// export async function logoutAction() {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   redirect("/");
// }

// export async function createOrderAction(
//   items: {
//     productId: string;
//     quantity: number;
//   }[],
//   payload: CheckoutPayload
// ) {
//   const supabase = await createClient();

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return {
//       success: false,
//       message: "Please log in before placing an order."
//     };
//   }

//   if (!items.length) {
//     return {
//       success: false,
//       message: "Your cart is empty."
//     };
//   }

//   const productIds = items.map((item) => item.productId);

//   const { data: products, error: productsError } = await supabase
//     .from("products")
//     .select("*")
//     .in("id", productIds)
//     .eq("status", "active");

//   if (productsError || !products) {
//     return {
//       success: false,
//       message: "Unable to validate products."
//     };
//   }

//   let subtotal = 0;

//   for (const cartItem of items) {
//     const product = products.find((entry) => entry.id === cartItem.productId);

//     if (!product) {
//       return {
//         success: false,
//         message: "One or more products are not available."
//       };
//     }

//     if (product.stock_quantity < cartItem.quantity) {
//       return {
//         success: false,
//         message: `${product.name} does not have enough stock.`
//       };
//     }

//     subtotal += Number(product.price) * cartItem.quantity;
//   }

//   const deliveryFee = subtotal >= 50000 ? 0 : 2500;
//   const discountAmount = 0;
//   const totalAmount = subtotal + deliveryFee - discountAmount;

//   const { data: order, error: orderError } = await supabase
//     .from("orders")
//     .insert({
//       customer_id: user.id,
//       status: "pending",
//       payment_status: "pending",
//       subtotal,
//       delivery_fee: deliveryFee,
//       discount_amount: discountAmount,
//       total_amount: totalAmount,
//       notes: payload.notes ?? null,
//       delivery_address_line_1: payload.deliveryAddressLine1,
//       delivery_address_line_2: payload.deliveryAddressLine2 ?? null,
//       delivery_city: payload.deliveryCity,
//       delivery_state: payload.deliveryState,
//       delivery_country: payload.deliveryCountry ?? "Nigeria"
//     })
//     .select()
//     .single();

//   if (orderError || !order) {
//     console.error(orderError);
//     return {
//       success: false,
//       message: "Unable to create order."
//     };
//   }

//   const orderItemsPayload = items.map((cartItem) => {
//     const product = products.find((entry) => entry.id === cartItem.productId)!;
//     const unitPrice = Number(product.price);
//     const itemSubtotal = unitPrice * cartItem.quantity;

//     return {
//       order_id: order.id,
//       product_id: product.id,
//       product_name: product.name,
//       product_sku: product.sku,
//       unit_price: unitPrice,
//       quantity: cartItem.quantity,
//       subtotal: itemSubtotal
//     };
//   });

//   const { error: itemsError } = await supabase
//     .from("order_items")
//     .insert(orderItemsPayload);

//   if (itemsError) {
//     console.error(itemsError);
//     return {
//       success: false,
//       message: "Order created but items could not be saved."
//     };
//   }

//   const { error: paymentError } = await supabase
//     .from("payments")
//     .insert({
//       order_id: order.id,
//       amount: totalAmount,
//       status: "pending",
//       method: payload.paymentMethod
//     });

//   if (paymentError) {
//     console.error(paymentError);
//     return {
//       success: false,
//       message: "Order created but payment record failed."
//     };
//   }

//   const { error: inventoryError } = await supabase.rpc("apply_order_inventory_deduction", {
//     p_order_id: order.id,
//     p_performed_by: user.id
//   });

//   if (inventoryError) {
//     console.error(inventoryError);
//     return {
//       success: false,
//       message: "Order created but stock deduction failed."
//     };
//   }

//   if (payload.phone) {
//     await supabase
//       .from("customers")
//       .update({
//         phone: payload.phone,
//         address_line_1: payload.deliveryAddressLine1,
//         address_line_2: payload.deliveryAddressLine2 ?? null,
//         city: payload.deliveryCity,
//         state: payload.deliveryState,
//         country: payload.deliveryCountry ?? "Nigeria"
//       })
//       .eq("id", user.id);

//     await supabase
//       .from("profiles")
//       .update({
//         phone: payload.phone
//       })
//       .eq("id", user.id);
//   }

//   return {
//     success: true,
//     message: "Order placed successfully.",
//     orderId: order.id,
//     orderNumber: order.order_number
//   };
// }


// "use server";

// import { redirect } from "next/navigation";
// import type { CheckoutPayload } from "@supermarket/shared";
// import { createClient } from "@/lib/supabase/server";

// function toText(value: FormDataEntryValue | null) {
//   return typeof value === "string" ? value.trim() : "";
// }

// export async function loginAction(formData: FormData) {
//   const supabase = await createClient();

//   const email = toText(formData.get("email"));
//   const password = toText(formData.get("password"));

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password
//   });

//   if (error) {
//     return { success: false, message: error.message };
//   }

//   redirect("/");
// }

// export async function registerAction(formData: FormData) {
//   const supabase = await createClient();

//   const fullName = toText(formData.get("fullName"));
//   const email = toText(formData.get("email"));
//   const phone = toText(formData.get("phone"));
//   const password = toText(formData.get("password"));

//   const { error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         full_name: fullName
//       }
//     }
//   });

//   if (error) {
//     return { success: false, message: error.message };
//   }

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (user) {
//     await supabase
//       .from("customers")
//       .update({
//         full_name: fullName,
//         phone
//       })
//       .eq("id", user.id);

//     await supabase
//       .from("profiles")
//       .update({
//         full_name: fullName,
//         phone
//       })
//       .eq("id", user.id);
//   }

//   redirect("/account");
// }

// export async function logoutAction() {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   redirect("/");
// }

// export async function createOrderAction(
//   items: {
//     productId: string;
//     quantity: number;
//   }[],
//   payload: CheckoutPayload
// ) {
//   const supabase = await createClient();

//   const {
//     data: { user }
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return {
//       success: false,
//       message: "Please log in before placing an order."
//     };
//   }

//   if (!items.length) {
//     return {
//       success: false,
//       message: "Your cart is empty."
//     };
//   }

//   const { data, error } = await supabase.rpc("create_customer_order", {
//     p_items: items,
//     p_delivery_address_line_1: payload.deliveryAddressLine1,
//     p_delivery_address_line_2: payload.deliveryAddressLine2 ?? null,
//     p_delivery_city: payload.deliveryCity,
//     p_delivery_state: payload.deliveryState,
//     p_delivery_country: payload.deliveryCountry ?? "Nigeria",
//     p_phone: payload.phone ?? null,
//     p_notes: payload.notes ?? null,
//     p_payment_method: payload.paymentMethod
//   });

//   if (error || !data || !data.length) {
//     console.error(error);
//     return {
//       success: false,
//       message: error?.message ?? "Unable to create order."
//     };
//   }

//   return {
//     success: true,
//     message: "Order placed successfully.",
//     orderId: data[0].order_id,
//     orderNumber: data[0].order_number
//   };
// }


"use server";

import { redirect } from "next/navigation";
import type { CheckoutPayload } from "@supermarket/shared";
import { createClient } from "@/lib/supabase/server";

function toText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function loginAction(formData: FormData) {
  const supabase = await createClient();

  const email = toText(formData.get("email"));
  const password = toText(formData.get("password"));

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return { success: false, message: error.message };
  }

  redirect("/account");
}

export async function registerAction(formData: FormData) {
  const supabase = await createClient();

  const fullName = toText(formData.get("fullName"));
  const email = toText(formData.get("email"));
  const phone = toText(formData.get("phone"));
  const password = toText(formData.get("password"));

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });

  if (signUpError) {
    return { success: false, message: signUpError.message };
  }

  const userId = signUpData.user?.id;

  if (!userId) {
    return {
      success: false,
      message: "Account created partially. Please try logging in."
    };
  }

  // Important: sign in immediately so auth.uid() exists for updates
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (signInError) {
    return {
      success: false,
      message:
        "Account created, but automatic login failed. Please log in manually."
    };
  }

  await supabase.from("profiles").upsert({
    id: userId,
    email,
    full_name: fullName,
    phone: phone || null,
    role: "customer",
    is_active: true
  });

  await supabase.from("customers").upsert({
    id: userId,
    email,
    full_name: fullName,
    phone: phone || null
  });

  redirect("/account");
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

export async function createOrderAction(
  items: {
    productId: string;
    quantity: number;
  }[],
  payload: CheckoutPayload
) {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Please log in before placing an order."
    };
  }

  if (!items.length) {
    return {
      success: false,
      message: "Your cart is empty."
    };
  }

  const { data, error } = await supabase.rpc("create_customer_order", {
    p_items: items,
    p_delivery_address_line_1: payload.deliveryAddressLine1,
    p_delivery_city: payload.deliveryCity,
    p_delivery_state: payload.deliveryState,
    p_delivery_address_line_2: payload.deliveryAddressLine2 ?? null,
    p_delivery_country: payload.deliveryCountry ?? "Nigeria",
    p_phone: payload.phone ?? null,
    p_notes: payload.notes ?? null,
    p_payment_method: payload.paymentMethod
  });

  if (error || !data || !data.length) {
    console.error(error);
    return {
      success: false,
      message: error?.message ?? "Unable to create order."
    };
  }

  return {
    success: true,
    message: "Order placed successfully.",
    orderId: data[0].order_id,
    orderNumber: data[0].order_number
  };
}