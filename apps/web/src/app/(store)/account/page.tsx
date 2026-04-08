// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { StatCard } from "@/components/ui/stat-card";

// export default function AccountPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
//         <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
//           <ShellCard
//             title="Customer profile"
//             description="Profile details and saved information will be connected in Batch 3."
//           >
//             <div className="space-y-3 text-sm text-slate-600">
//               <p>Name: Demo Customer</p>
//               <p>Email: customer@example.com</p>
//               <p>Phone: +234 800 000 0000</p>
//             </div>
//           </ShellCard>

//           <div className="grid gap-4 sm:grid-cols-2">
//             <StatCard label="Total orders" value="0" />
//             <StatCard label="Pending orders" value="0" />
//             <StatCard label="Delivered orders" value="0" />
//             <StatCard label="Saved addresses" value="0" />
//           </div>
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


// import { redirect } from "next/navigation";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { ShellCard } from "@/components/shared/shell-card";
// import { StatCard } from "@/components/ui/stat-card";
// import { getCurrentCustomer, getCurrentCustomerOrders, getCurrentProfile } from "@/lib/storefront";

// export default async function AccountPage() {
//   const [profile, customer, orders] = await Promise.all([
//     getCurrentProfile(),
//     getCurrentCustomer(),
//     getCurrentCustomerOrders()
//   ]);

//   if (!profile) {
//     redirect("/login");
//   }

//   const delivered = orders.filter((order) => order.status === "delivered").length;
//   const pending = orders.filter((order) => order.status === "pending").length;

//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
//         <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
//           <ShellCard
//             title="Customer profile"
//             description="Your account information"
//           >
//             <div className="space-y-3 text-sm text-slate-600">
//               <p>Name: {profile.fullName}</p>
//               <p>Email: {profile.email}</p>
//               <p>Phone: {customer?.phone ?? "Not added yet"}</p>
//               <p>
//                 Address: {customer?.addressLine1 ?? "No address saved"}
//                 {customer?.city ? `, ${customer.city}` : ""}
//                 {customer?.state ? `, ${customer.state}` : ""}
//               </p>
//             </div>
//           </ShellCard>

//           <div className="grid gap-4 sm:grid-cols-2">
//             <StatCard label="Total orders" value={String(orders.length)} />
//             <StatCard label="Pending orders" value={String(pending)} />
//             <StatCard label="Delivered orders" value={String(delivered)} />
//             <StatCard label="Account role" value={profile.role} />
//           </div>
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


import Link from "next/link";
import { redirect } from "next/navigation";
import { StorefrontLayout } from "@/components/store/storefront-layout";
import { StatCard } from "@/components/ui/stat-card";
import { getCurrentCustomer, getCurrentCustomerOrders, getCurrentProfile } from "@/lib/storefront";

export default async function AccountPage() {
  const [profile, customer, orders] = await Promise.all([
    getCurrentProfile(),
    getCurrentCustomer(),
    getCurrentCustomerOrders()
  ]);

  if (!profile) {
    redirect("/login");
  }

  const delivered = orders.filter((order) => order.status === "delivered").length;
  const pending = orders.filter((order) => order.status === "pending").length;

  return (
    <StorefrontLayout>
      <section className="bg-[#fff7e6]">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-violet-700 shadow-soft">
            <div className="grid gap-6 px-6 py-10 text-white lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-300">
                  My account
                </p>
                <h1 className="mt-3 text-4xl font-black lg:text-5xl">
                  Manage your profile and order activity
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                  Review your account details, saved information, and recent order performance.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/80">Customer name</p>
                  <h3 className="mt-2 text-xl font-black">{profile.fullName}</h3>
                </div>
                <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/80">Account role</p>
                  <h3 className="mt-2 text-xl font-black capitalize">{profile.role}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-green-700">
              Customer profile
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Your information
            </h2>

            <div className="mt-6 space-y-5">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Full name</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{profile.fullName}</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Email address</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{profile.email}</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Phone number</p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {customer?.phone ?? "Not added yet"}
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Delivery address</p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  {customer?.addressLine1 ?? "No address saved"}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {[customer?.city, customer?.state, customer?.country]
                    .filter(Boolean)
                    .join(", ") || "No location added yet"}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/orders"
                  className="inline-flex rounded-2xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"
                >
                  View my orders
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard label="Total orders" value={String(orders.length)} />
              <StatCard label="Pending orders" value={String(pending)} />
              <StatCard label="Delivered orders" value={String(delivered)} />
              <StatCard label="Account status" value={profile.isActive ? "Active" : "Inactive"} />
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                Account summary
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Shopping activity
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                This account is linked to your customer orders, delivery details,
                and shopping history on FreshMart.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl bg-orange-50 p-4 text-sm font-semibold text-slate-800">
                  Manage your orders easily
                </div>
                <div className="rounded-2xl bg-green-50 p-4 text-sm font-semibold text-slate-800">
                  Save checkout details for faster future purchases
                </div>
                <div className="rounded-2xl bg-sky-50 p-4 text-sm font-semibold text-slate-800">
                  Track your customer activity from one dashboard
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">
                Quick note
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Your city, state, and address are usually updated during checkout.
                Once you place an order, your profile becomes more complete automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </StorefrontLayout>
  );
}