"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShellCard } from "@/components/shared/shell-card";
import { formatNaira } from "@/lib/format";

export function CartPageClient() {
  const { items, hydrated, removeItem, updateQuantity, totalAmount } = useCart();

  if (!hydrated) {
    return (
      <ShellCard title="Shopping cart" description="Loading your cart...">
        <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-600">
          Loading...
        </div>
      </ShellCard>
    );
  }

  if (!items.length) {
    return (
      <ShellCard title="Shopping cart" description="Your cart is currently empty.">
        <div className="space-y-4">
          <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-600">
            No items in cart yet.
          </div>
          <Link href="/shop">
            <Button>Start shopping</Button>
          </Link>
        </div>
      </ShellCard>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <ShellCard title="Shopping cart" description="Review your selected items.">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl ?? "https://placehold.co/120x120"}
                  alt={item.name}
                  className="h-20 w-20 rounded-2xl object-cover"
                />
                <div>
                  <Link href={`/shop/${item.slug}`} className="text-lg font-bold text-slate-900">
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-slate-600">{formatNaira(item.price)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="rounded-xl border border-slate-300 p-2"
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-8 text-center font-semibold">{item.quantity}</span>
                <button
                  className="rounded-xl border border-slate-300 p-2"
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  className="rounded-xl border border-red-200 p-2 text-red-600"
                  onClick={() => removeItem(item.productId)}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </ShellCard>

      <ShellCard title="Order summary" description="Proceed to checkout when ready.">
        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatNaira(totalAmount)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>{totalAmount >= 50000 ? "Free" : formatNaira(2500)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-slate-900">
            <span>Total</span>
            <span>{formatNaira(totalAmount >= 50000 ? totalAmount : totalAmount + 2500)}</span>
          </div>

          <Link href="/checkout" className="block pt-3">
            <Button className="w-full">Proceed to checkout</Button>
          </Link>
        </div>
      </ShellCard>
    </div>
  );
}