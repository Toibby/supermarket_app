// import Link from "next/link";
// import { ArrowRight, ShieldCheck, Truck, Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
//         <div className="flex flex-col justify-center">
//           <Badge>Modern supermarket experience</Badge>
//           <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 lg:text-6xl">
//             Shop groceries fast with a strong customer experience.
//           </h1>
//           <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
//             Fresh products, quick checkout, beautiful storefront, and a real admin
//             system for inventory, orders, workers, and analytics.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <Link href="/shop">
//               <Button className="gap-2 px-6 py-3">
//                 Start shopping
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//             </Link>
//             <Link href="/admin/dashboard">
//               <Button variant="outline" className="px-6 py-3">
//                 View admin
//               </Button>
//             </Link>
//           </div>

//           <div className="mt-10 grid gap-4 sm:grid-cols-3">
//             <div className="rounded-3xl border border-slate-200 p-4">
//               <Truck className="h-5 w-5 text-brand-600" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">Fast delivery flow</p>
//             </div>
//             <div className="rounded-3xl border border-slate-200 p-4">
//               <Wallet className="h-5 w-5 text-brand-600" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">Clean checkout structure</p>
//             </div>
//             <div className="rounded-3xl border border-slate-200 p-4">
//               <ShieldCheck className="h-5 w-5 text-brand-600" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">Role-based admin access</p>
//             </div>
//           </div>
//         </div>

//         <div className="rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-slate-100 p-6 shadow-soft">
//           <div className="grid h-full gap-4 sm:grid-cols-2">
//             <div className="rounded-3xl bg-white p-5">
//               <p className="text-sm text-slate-500">Today sales</p>
//               <h3 className="mt-2 text-3xl font-black text-slate-900">₦284,300</h3>
//               <p className="mt-3 text-sm text-emerald-600">+12.4% compared to yesterday</p>
//             </div>
//             <div className="rounded-3xl bg-slate-900 p-5 text-white">
//               <p className="text-sm text-slate-300">Orders fulfilled</p>
//               <h3 className="mt-2 text-3xl font-black">128</h3>
//               <p className="mt-3 text-sm text-slate-300">Operations view from admin dashboard</p>
//             </div>
//             <div className="rounded-3xl bg-white p-5 sm:col-span-2">
//               <p className="text-sm text-slate-500">What this project supports</p>
//               <div className="mt-4 grid gap-3 sm:grid-cols-3">
//                 <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">Customer storefront</div>
//                 <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">Admin inventory system</div>
//                 <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">Supabase-backed commerce</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




// import Link from "next/link";
// import { ArrowRight, ShieldCheck, ShoppingBasket, Truck } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
//         <div className="flex flex-col justify-center">
//           <Badge>Fresh groceries. Fast delivery. Reliable service.</Badge>

//           <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 lg:text-6xl">
//             Your trusted supermarket for everyday shopping.
//           </h1>

//           <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
//             Shop food items, drinks, fresh produce, household supplies, and personal care
//             products in one place. FreshMart makes supermarket shopping easy for homes,
//             offices, and busy families.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <Link href="/shop">
//               <Button className="gap-2 px-6 py-3">
//                 Shop now
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//             </Link>

//             <Link href="/register">
//               <Button variant="outline" className="px-6 py-3">
//                 Create account
//               </Button>
//             </Link>
//           </div>

//           <div className="mt-10 grid gap-4 sm:grid-cols-3">
//             <div className="rounded-3xl border border-slate-200 p-4">
//               <ShoppingBasket className="h-5 w-5 text-brand-600" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">
//                 Wide product range
//               </p>
//             </div>
//             <div className="rounded-3xl border border-slate-200 p-4">
//               <Truck className="h-5 w-5 text-brand-600" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">
//                 Easy checkout flow
//               </p>
//             </div>
//             <div className="rounded-3xl border border-slate-200 p-4">
//               <ShieldCheck className="h-5 w-5 text-brand-600" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">
//                 Secure account access
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-slate-100 p-6 shadow-soft">
//           <div className="grid h-full gap-4 sm:grid-cols-2">
//             <div className="rounded-3xl bg-white p-5">
//               <p className="text-sm text-slate-500">Popular departments</p>
//               <h3 className="mt-2 text-2xl font-black text-slate-900">Groceries</h3>
//               <p className="mt-3 text-sm text-slate-600">
//                 Rice, pasta, seasoning, flour, canned foods, and daily essentials.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-slate-900 p-5 text-white">
//               <p className="text-sm text-slate-300">Customer convenience</p>
//               <h3 className="mt-2 text-2xl font-black">Fast ordering</h3>
//               <p className="mt-3 text-sm text-slate-300">
//                 Add products to cart, checkout quickly, and track your orders.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-white p-5 sm:col-span-2">
//               <p className="text-sm text-slate-500">Why customers shop with us</p>
//               <div className="mt-4 grid gap-3 sm:grid-cols-3">
//                 <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
//                   Fresh food items
//                 </div>
//                 <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
//                   Household essentials
//                 </div>
//                 <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-800">
//                   Convenient delivery
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// import Link from "next/link";
// import {
//   Apple,
//   ArrowRight,
//   Milk,
//   ShieldCheck,
//   ShoppingBasket,
//   Sparkles,
//   Truck
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-hero-mesh">
//       <div className="absolute left-8 top-10 hidden rounded-full bg-accent-yellow/70 p-4 shadow-glow lg:block">
//         <Apple className="h-7 w-7 text-slate-900" />
//       </div>
//       <div className="absolute right-16 top-20 hidden rounded-full bg-accent-blue/70 p-4 shadow-soft lg:block">
//         <Milk className="h-7 w-7 text-slate-900" />
//       </div>
//       <div className="absolute bottom-16 left-1/2 hidden rounded-full bg-accent-pink/70 p-4 shadow-soft lg:block">
//         <Sparkles className="h-7 w-7 text-slate-900" />
//       </div>

//       <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
//         <div className="flex flex-col justify-center">
//           <Badge className="bg-white/80 text-brand-700 shadow-soft">
//             Fresh groceries. Fast delivery. Reliable service.
//           </Badge>

//           <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-950 lg:text-6xl">
//             A brighter supermarket experience for everyday shopping.
//           </h1>

//           <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
//             Shop groceries, drinks, fresh produce, household essentials, and
//             personal care products from one colourful and easy-to-use online
//             supermarket.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <Link href="/shop">
//               <Button className="gap-2 px-6 py-3 shadow-glow">
//                 Shop now
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//             </Link>

//             <Link href="/register">
//               <Button
//                 variant="outline"
//                 className="border-orange-200 bg-white/80 px-6 py-3 text-slate-900"
//               >
//                 Create account
//               </Button>
//             </Link>
//           </div>

//           <div className="mt-10 grid gap-4 sm:grid-cols-3">
//             <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-4 shadow-soft">
//               <ShoppingBasket className="h-5 w-5 text-orange-500" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">
//                 Wide product range
//               </p>
//             </div>
//             <div className="rounded-3xl border border-sky-200 bg-sky-50 p-4 shadow-soft">
//               <Truck className="h-5 w-5 text-sky-500" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">
//                 Easy checkout flow
//               </p>
//             </div>
//             <div className="rounded-3xl border border-green-200 bg-green-50 p-4 shadow-soft">
//               <ShieldCheck className="h-5 w-5 text-brand-600" />
//               <p className="mt-3 text-sm font-semibold text-slate-900">
//                 Secure account access
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-soft backdrop-blur">
//           <div className="grid h-full gap-4 sm:grid-cols-2">
//             <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-yellow-50 to-orange-50 p-5">
//               <p className="text-sm text-slate-500">Popular department</p>
//               <h3 className="mt-2 text-2xl font-black text-slate-900">
//                 Groceries
//               </h3>
//               <p className="mt-3 text-sm text-slate-600">
//                 Rice, pasta, seasoning, flour, canned foods, and kitchen staples.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-emerald-700 p-5 text-white">
//               <p className="text-sm text-emerald-100">Customer convenience</p>
//               <h3 className="mt-2 text-2xl font-black">Fast ordering</h3>
//               <p className="mt-3 text-sm text-emerald-50">
//                 Add products to cart, checkout quickly, and track your orders.
//               </p>
//             </div>

//             <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-5">
//               <p className="text-sm text-slate-500">Fresh section</p>
//               <h3 className="mt-2 text-2xl font-black text-slate-900">
//                 Fruits & Vegetables
//               </h3>
//               <p className="mt-3 text-sm text-slate-600">
//                 Fresh produce for soups, stews, salads, and everyday meals.
//               </p>
//             </div>

//             <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50 p-5">
//               <p className="text-sm text-slate-500">Home essentials</p>
//               <h3 className="mt-2 text-2xl font-black text-slate-900">
//                 Household care
//               </h3>
//               <p className="mt-3 text-sm text-slate-600">
//                 Cleaning products and home care items for daily use.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export function Hero() {
//   return (
//     <section className="relative">
//       <div className="relative h-[420px] w-full overflow-hidden">
//         <img
//           src="/hero.jpg"
//           alt="Supermarket shelves"
//           className="h-full w-full object-cover"
//         />

//         {/* overlay */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-4xl font-black lg:text-5xl">
//             Your Everyday Nigerian Supermarket
//           </h1>

//           <p className="mt-3 text-lg text-white/90 max-w-2xl">
//             Shop groceries, food items, drinks, and household essentials quickly and easily.
//           </p>

//           <div className="mt-6 flex gap-4">
//             <Link href="/shop">
//               <Button className="bg-green-600 hover:bg-green-700 px-6 py-3">
//                 Start Shopping
//               </Button>
//             </Link>

//             <Link href="/cart">
//               <Button variant="outline" className="border-white text-white">
//                 View Cart
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-[#fff7e6]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside className="hidden rounded-3xl bg-white p-4 shadow-soft lg:block">
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.15em] text-slate-500">
            Shop departments
          </h3>
          <div className="space-y-3 text-sm font-semibold text-slate-700">
            <p>Groceries</p>
            <p>Beverages</p>
            <p>Fresh Produce</p>
            <p>Household Items</p>
            <p>Personal Care</p>
            <p>Snacks</p>
            <p>Cooking Essentials</p>
            <p>Breakfast Items</p>
          </div>
        </aside>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <div className="relative h-[420px] w-full">
            <img
              src="/hero.png"
              alt="Nigerian supermarket shelves"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 text-white lg:px-12">
              <span className="w-fit rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
                Best deals on everyday essentials
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight lg:text-6xl">
                Shop your favourite Nigerian groceries in one place.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 lg:text-lg">
                Rice, noodles, milk, drinks, toiletries, fresh produce, household supplies,
                and more — all from a clean, fast, reliable supermarket platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button className="bg-green-600 px-6 py-3 hover:bg-green-700">
                    Shop now
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-orange-500 px-6 py-3 hover:bg-orange-600">
                    Create account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}