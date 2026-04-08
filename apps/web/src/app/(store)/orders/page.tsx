// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function OrdersPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
//         <ShellCard
//           title="Order history"
//           description="Customer orders will be loaded from the database in Batch 3."
//         >
//           <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-600">
//             No orders yet.
//           </div>
//         </ShellCard>
//       </section>
//     </StorefrontLayout>
//   );
// }


// import { redirect } from "next/navigation";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { getCurrentCustomerOrders, getCurrentProfile } from "@/lib/storefront";
// import { formatNaira } from "@/lib/format";

// export default async function OrdersPage() {
//   const [profile, orders] = await Promise.all([
//     getCurrentProfile(),
//     getCurrentCustomerOrders()
//   ]);

//   if (!profile) {
//     redirect("/login");
//   }

//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
//         <ShellCard
//           title="Order history"
//           description="Track your previous supermarket orders"
//         >
//           {!orders.length ? (
//             <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-600">
//               No orders yet.
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {orders.map((order) => (
//                 <div
//                   key={order.id}
//                   className="rounded-2xl border border-slate-200 p-5"
//                 >
//                   <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//                     <div>
//                       <h3 className="text-lg font-bold text-slate-900">
//                         {order.orderNumber}
//                       </h3>
//                       <p className="text-sm text-slate-500">
//                         {new Date(order.createdAt).toLocaleString()}
//                       </p>
//                     </div>
//                     <div className="flex gap-3 text-sm">
//                       <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
//                         {order.status}
//                       </span>
//                       <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
//                         {order.paymentStatus}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="mt-4 space-y-2 text-sm text-slate-600">
//                     {order.items?.map((item) => (
//                       <div key={item.id} className="flex justify-between">
//                         <span>
//                           {item.productName} × {item.quantity}
//                         </span>
//                         <span>{formatNaira(item.subtotal)}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-sm font-bold text-slate-900">
//                     <span>Total</span>
//                     <span>{formatNaira(order.totalAmount)}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </ShellCard>
//       </section>
//     </StorefrontLayout>
//   );
// }


import { redirect } from "next/navigation";
import { StorefrontLayout } from "@/components/store/storefront-layout";
import { getCurrentCustomerOrders, getCurrentProfile } from "@/lib/storefront";
import { formatNaira } from "@/lib/format";

export default async function OrdersPage() {
  const [profile, orders] = await Promise.all([
    getCurrentProfile(),
    getCurrentCustomerOrders()
  ]);

  if (!profile) {
    redirect("/login");
  }

  return (
    <StorefrontLayout>
      <section className="bg-[#fff7e6]">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 shadow-soft">
            <div className="px-6 py-10 text-white lg:px-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-100">
                Order history
              </p>
              <h1 className="mt-3 text-4xl font-black lg:text-5xl">
                Track your supermarket orders
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
                Review order status, payment state, and item details from your shopping history.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-8">
          {!orders.length ? (
            <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-600">
              No orders yet.
            </div>
          ) : (
            <div className="space-y-5">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-[1.7rem] border border-slate-200 p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-black text-slate-900">
                        {order.orderNumber}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {new Date(order.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex gap-3 text-sm">
                      <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                        {order.status}
                      </span>
                      <span className="rounded-full bg-green-50 px-3 py-1 font-semibold text-green-700">
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    {order.items?.map((item) => (
                      <div key={item.id} className="flex justify-between gap-4">
                        <span>
                          {item.productName} × {item.quantity}
                        </span>
                        <span className="font-semibold text-slate-800">
                          {formatNaira(item.subtotal)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex justify-between border-t border-slate-200 pt-4 text-base font-black text-slate-900">
                    <span>Total</span>
                    <span>{formatNaira(order.totalAmount)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </StorefrontLayout>
  );
}