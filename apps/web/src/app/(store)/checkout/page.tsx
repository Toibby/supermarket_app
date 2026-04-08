// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function CheckoutPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
//         <ShellCard
//           title="Checkout"
//           description="Delivery info, payment, and order creation will become functional in Batch 3."
//         >
//           <div className="grid gap-4">
//             <Input placeholder="Full name" />
//             <Input placeholder="Email address" />
//             <Input placeholder="Phone number" />
//             <Input placeholder="Delivery address" />
//             <Button className="mt-2 w-fit">Place order</Button>
//           </div>
//         </ShellCard>

//         <ShellCard
//           title="Order summary"
//           description="Summary connected to cart and order totals comes in Batch 3."
//         >
//           <div className="space-y-3 text-sm text-slate-600">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₦0</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery</span>
//               <span>₦0</span>
//             </div>
//             <div className="flex justify-between font-bold text-slate-900">
//               <span>Total</span>
//               <span>₦0</span>
//             </div>
//           </div>
//         </ShellCard>
//       </section>
//     </StorefrontLayout>
//   );
// }


// import { redirect } from "next/navigation";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { CheckoutForm } from "@/components/store/checkout-form";
// import { getCurrentCustomer, getCurrentProfile } from "@/lib/storefront";

// export default async function CheckoutPage() {
//   const [profile, customer] = await Promise.all([
//     getCurrentProfile(),
//     getCurrentCustomer()
//   ]);

//   if (!profile) {
//     redirect("/login");
//   }

//   return (
//     <StorefrontLayout>
//       <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
//         <ShellCard
//           title="Checkout"
//           description="Delivery information and order placement"
//         >
//           <CheckoutForm
//             defaultFullName={profile.fullName}
//             defaultEmail={profile.email}
//             defaultPhone={customer?.phone ?? ""}
//             defaultAddressLine1={customer?.addressLine1 ?? ""}
//             defaultAddressLine2={customer?.addressLine2 ?? ""}
//             defaultCity={customer?.city ?? ""}
//             defaultState={customer?.state ?? ""}
//             defaultCountry={customer?.country ?? "Nigeria"}
//           />
//         </ShellCard>

//         <ShellCard
//           title="Checkout note"
//           description="Free delivery applies on orders from ₦50,000."
//         >
//           <div className="space-y-3 text-sm text-slate-600">
//             <p>Make sure your phone number and address are correct before placing the order.</p>
//             <p>Inventory is deducted immediately when an order is created.</p>
//           </div>
//         </ShellCard>
//       </section>
//     </StorefrontLayout>
//   );
// }


import { redirect } from "next/navigation";
import { StorefrontLayout } from "@/components/store/storefront-layout";
import { ShellCard } from "@/components/shared/shell-card";
import { CheckoutForm } from "@/components/store/checkout-form";
import { getCurrentCustomer, getCurrentProfile } from "@/lib/storefront";

export default async function CheckoutPage() {
  const [profile, customer] = await Promise.all([
    getCurrentProfile(),
    getCurrentCustomer()
  ]);

  if (!profile) {
    redirect("/login");
  }

  return (
    <StorefrontLayout>
      <section className="bg-[#fff7e6]">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-emerald-700 via-green-600 to-orange-500 shadow-soft">
            <div className="grid gap-6 px-6 py-10 text-white lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-green-100">
                  Checkout
                </p>
                <h1 className="mt-3 text-4xl font-black lg:text-5xl">
                  Complete your order in a few steps
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
                  Confirm your delivery details, choose your payment method, and
                  place your supermarket order securely.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/12 p-5 backdrop-blur">
                  <p className="text-sm text-white/80">Delivery coverage</p>
                  <h3 className="mt-2 text-2xl font-black">Nigeria</h3>
                </div>
                <div className="rounded-3xl bg-white/12 p-5 backdrop-blur">
                  <p className="text-sm text-white/80">Order flow</p>
                  <h3 className="mt-2 text-2xl font-black">Fast & simple</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-green-700">
                Delivery information
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">
                Enter your details
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Make sure your address and phone number are correct before placing your order.
              </p>
            </div>

            <CheckoutForm
              defaultFullName={profile.fullName}
              defaultEmail={profile.email}
              defaultPhone={customer?.phone ?? ""}
              defaultAddressLine1={customer?.addressLine1 ?? ""}
              defaultAddressLine2={customer?.addressLine2 ?? ""}
              defaultCity={customer?.city ?? ""}
              defaultState={customer?.state ?? ""}
              defaultCountry={customer?.country ?? "Nigeria"}
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                Payment methods
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Available options
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                  Bank transfer
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                  Card
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                  Cash
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                  POS / Wallet
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">
                Checkout note
              </p>
              <h3 className="mt-2 text-2xl font-black">
                Delivery fee policy
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Orders from ₦50,000 qualify for free delivery. Orders below that
                threshold include a delivery fee during checkout.
              </p>
            </div>

            <div className="rounded-[2rem] bg-orange-50 p-6 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-700">
                Customer support
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                If you need any delivery update or correction to your details,
                your admin and order system can track the request after order placement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </StorefrontLayout>
  );
}