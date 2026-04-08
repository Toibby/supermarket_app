// "use client";

// import { create } from "zustand";
// import type { CartItem, Product } from "@supermarket/shared";

// interface CartState {
//   items: CartItem[];
//   addItem: (product: Product, quantity?: number) => void;
//   removeItem: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: () => number;
//   totalAmount: () => number;
// }

// export const useCartStore = create<CartState>((set, get) => ({
//   items: [],
//   addItem: (product, quantity = 1) =>
//     set((state) => {
//       const existing = state.items.find((item) => item.productId === product.id);

//       if (existing) {
//         return {
//           items: state.items.map((item) =>
//             item.productId === product.id
//               ? {
//                   ...item,
//                   quantity: Math.min(item.quantity + quantity, item.stockQuantity)
//                 }
//               : item
//           )
//         };
//       }

//       return {
//         items: [
//           ...state.items,
//           {
//             productId: product.id,
//             name: product.name,
//             slug: product.slug,
//             price: product.price,
//             quantity,
//             imageUrl: product.thumbnailUrl,
//             stockQuantity: product.stockQuantity
//           }
//         ]
//       };
//     }),
//   removeItem: (productId) =>
//     set((state) => ({
//       items: state.items.filter((item) => item.productId !== productId)
//     })),
//   updateQuantity: (productId, quantity) =>
//     set((state) => ({
//       items: state.items.map((item) =>
//         item.productId === productId
//           ? {
//               ...item,
//               quantity: Math.max(1, Math.min(quantity, item.stockQuantity))
//             }
//           : item
//       )
//     })),
//   clearCart: () => set({ items: [] }),
//   totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
//   totalAmount: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
// }));


"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartItem, Product } from "@supermarket/shared";

interface CartState {
  items: CartItem[];
  hydrated: boolean;
  markHydrated: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalAmount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      hydrated: false,
      markHydrated: () => set({ hydrated: true }),
      addItem: (product, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((item) => item.productId === product.id);

          if (existing) {
            return {
              items: state.items.map((item) =>
                item.productId === product.id
                  ? {
                      ...item,
                      quantity: Math.min(item.quantity + quantity, item.stockQuantity)
                    }
                  : item
              )
            };
          }

          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                name: product.name,
                slug: product.slug,
                price: product.price,
                quantity: Math.min(quantity, product.stockQuantity),
                imageUrl: product.thumbnailUrl,
                stockQuantity: product.stockQuantity
              }
            ]
          };
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId)
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  quantity: Math.max(1, Math.min(quantity, item.stockQuantity))
                }
              : item
          )
        })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      totalAmount: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    }),
    {
      name: "freshmart-cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.markHydrated();
      }
    }
  )
);