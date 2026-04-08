// "use client";

// import type { Product } from "@supermarket/shared";
// import { useCart } from "@/hooks/use-cart";
// import { Button } from "@/components/ui/button";

// export function AddToCartButton({
//   product,
//   className
// }: {
//   product: Product;
//   className?: string;
// }) {
//   const { addItem } = useCart();

//   return (
//     <Button
//       className={className}
//       onClick={() => addItem(product, 1)}
//       disabled={product.stockQuantity <= 0}
//     >
//       {product.stockQuantity > 0 ? "Add to cart" : "Out of stock"}
//     </Button>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import type { Product } from "@supermarket/shared";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { useToastStore } from "@/store/toast-store";

export function AddToCartButton({
  product,
  className,
  buyNow = false
}: {
  product: Product;
  className?: string;
  buyNow?: boolean;
}) {
  const router = useRouter();
  const { addItem } = useCart();
  const pushToast = useToastStore((state) => state.push);

  return (
    <Button
      className={className}
      onClick={() => {
        addItem(product, 1);

        pushToast({
          type: "success",
          title: buyNow ? "Ready for checkout" : "Item added to cart",
          message: `${product.name} has been added successfully.`
        });

        if (buyNow) {
          router.push("/checkout");
        }
      }}
      disabled={product.stockQuantity <= 0}
    >
      {product.stockQuantity > 0 ? (buyNow ? "Buy now" : "Add to cart") : "Out of stock"}
    </Button>
  );
}