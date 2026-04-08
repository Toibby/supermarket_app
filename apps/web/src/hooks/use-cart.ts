// "use client";

// import { useCartStore } from "@/store/cart-store";

// export function useCart() {
//   const items = useCartStore((state) => state.items);
//   const addItem = useCartStore((state) => state.addItem);
//   const removeItem = useCartStore((state) => state.removeItem);
//   const updateQuantity = useCartStore((state) => state.updateQuantity);
//   const clearCart = useCartStore((state) => state.clearCart);
//   const totalItems = useCartStore((state) => state.totalItems());
//   const totalAmount = useCartStore((state) => state.totalAmount());

//   return {
//     items,
//     addItem,
//     removeItem,
//     updateQuantity,
//     clearCart,
//     totalItems,
//     totalAmount
//   };
// }


"use client";

import { useCartStore } from "@/store/cart-store";

export function useCart() {
  const items = useCartStore((state) => state.items);
  const hydrated = useCartStore((state) => state.hydrated);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.totalItems());
  const totalAmount = useCartStore((state) => state.totalAmount());

  return {
    items,
    hydrated,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalAmount
  };
}