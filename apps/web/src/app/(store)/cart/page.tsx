// import Link from "next/link";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { Button } from "@/components/ui/button";

// export default function CartPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
//         <ShellCard
//           title="Shopping cart"
//           description="Customer cart shell page ready for real cart state connection in Batch 3."
//         >
//           <div className="space-y-4">
//             <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-600">
//               Your cart items will appear here.
//             </div>
//             <div className="flex gap-4">
//               <Link href="/shop">
//                 <Button variant="outline">Continue shopping</Button>
//               </Link>
//               <Link href="/checkout">
//                 <Button>Proceed to checkout</Button>
//               </Link>
//             </div>
//           </div>
//         </ShellCard>
//       </section>
//     </StorefrontLayout>
//   );
// }



// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { CartPageClient } from "@/components/store/cart-page-client";

// export default function CartPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
//         <CartPageClient />
//       </section>
//     </StorefrontLayout>
//   );
// }


import { StorefrontLayout } from "@/components/store/storefront-layout";
import { CartPageClient } from "@/components/store/cart-page-client";

export default function CartPage() {
  return (
    <StorefrontLayout>
      <section className="bg-[#fff7e6]">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 shadow-soft">
            <div className="px-6 py-10 text-white lg:px-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-100">
                Your cart
              </p>
              <h1 className="mt-3 text-4xl font-black lg:text-5xl">
                Review your selected supermarket items
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
                Update quantities, remove products, and proceed to checkout when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-8">
          <CartPageClient />
        </div>
      </section>
    </StorefrontLayout>
  );
}