"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createOrderAction } from "@/app/actions";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CheckoutForm({
  defaultFullName,
  defaultEmail,
  defaultPhone,
  defaultAddressLine1,
  defaultAddressLine2,
  defaultCity,
  defaultState,
  defaultCountry
}: {
  defaultFullName?: string;
  defaultEmail?: string;
  defaultPhone?: string;
  defaultAddressLine1?: string;
  defaultAddressLine2?: string;
  defaultCity?: string;
  defaultState?: string;
  defaultCountry?: string;
}) {
  const router = useRouter();
  const { items, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setMessage("");

    const result = await createOrderAction(
      items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity
      })),
      {
        deliveryAddressLine1: String(formData.get("deliveryAddressLine1") ?? ""),
        deliveryAddressLine2: String(formData.get("deliveryAddressLine2") ?? ""),
        deliveryCity: String(formData.get("deliveryCity") ?? ""),
        deliveryState: String(formData.get("deliveryState") ?? ""),
        deliveryCountry: String(formData.get("deliveryCountry") ?? "Nigeria"),
        phone: String(formData.get("phone") ?? ""),
        notes: String(formData.get("notes") ?? ""),
        paymentMethod: String(formData.get("paymentMethod") ?? "transfer") as
          | "cash"
          | "card"
          | "transfer"
          | "wallet"
          | "pos"
      }
    );

    if (!result.success) {
      setMessage(result.message);
      setLoading(false);
      return;
    }

    clearCart();
    router.push("/orders");
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="grid gap-4">
      <Input name="fullName" placeholder="Full name" defaultValue={defaultFullName} disabled />
      <Input name="email" placeholder="Email address" defaultValue={defaultEmail} disabled />
      <Input name="phone" placeholder="Phone number" defaultValue={defaultPhone} />
      <Input
        name="deliveryAddressLine1"
        placeholder="Delivery address line 1"
        defaultValue={defaultAddressLine1}
        required
      />
      <Input
        name="deliveryAddressLine2"
        placeholder="Delivery address line 2"
        defaultValue={defaultAddressLine2}
      />
      <Input name="deliveryCity" placeholder="City" defaultValue={defaultCity} required />
      <Input name="deliveryState" placeholder="State" defaultValue={defaultState} required />
      <Input
        name="deliveryCountry"
        placeholder="Country"
        defaultValue={defaultCountry ?? "Nigeria"}
        required
      />

      <select
        name="paymentMethod"
        defaultValue="transfer"
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
      >
        <option value="transfer">Bank transfer</option>
        <option value="card">Card</option>
        <option value="cash">Cash</option>
        <option value="pos">POS</option>
        <option value="wallet">Wallet</option>
      </select>

      <textarea
        name="notes"
        placeholder="Order notes"
        className="min-h-28 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
      />

      {message ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {message}
        </div>
      ) : null}

      <Button type="submit" disabled={loading}>
        {loading ? "Placing order..." : "Place order"}
      </Button>
    </form>
  );
}