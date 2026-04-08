// import Link from "next/link";
// import { ShoppingCart, User } from "lucide-react";
// import { STORE_NAV } from "@/lib/constants";
// import { AppLogo } from "@/components/shared/app-logo";
// import { Button } from "@/components/ui/button";

// export function StorefrontLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
//           <AppLogo />

//           <nav className="hidden items-center gap-6 md:flex">
//             {STORE_NAV.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-3">
//             <Link href="/cart">
//               <Button variant="outline" className="gap-2">
//                 <ShoppingCart className="h-4 w-4" />
//                 Cart
//               </Button>
//             </Link>
//             <Link href="/login">
//               <Button className="gap-2">
//                 <User className="h-4 w-4" />
//                 Login
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main>{children}</main>

//       <footer className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 lg:px-8">
//           FreshMart supermarket platform — customer shopping and admin operations in one system.
//         </div>
//       </footer>
//     </div>
//   );
// }




// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import { STORE_NAV } from "@/lib/constants";
// import { AppLogo } from "@/components/shared/app-logo";
// import { Button } from "@/components/ui/button";
// import { getCurrentProfile } from "@/lib/storefront";
// import { AuthStatus } from "@/components/store/auth-status";

// export async function StorefrontLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const profile = await getCurrentProfile();

//   return (
//     <div className="min-h-screen bg-slate-50">
//       <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
//           <AppLogo />

//           <nav className="hidden items-center gap-6 md:flex">
//             {STORE_NAV.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-3">
//             <Link href="/cart">
//               <Button variant="outline" className="gap-2">
//                 <ShoppingCart className="h-4 w-4" />
//                 Cart
//               </Button>
//             </Link>

//             <AuthStatus fullName={profile?.fullName} />
//           </div>
//         </div>
//       </header>

//       <main>{children}</main>

//       <footer className="border-t border-slate-200 bg-white">
//         <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 lg:px-8">
//           FreshMart supermarket platform — customer shopping and admin operations in one system.
//         </div>
//       </footer>
//     </div>
//   );
// }



// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import { STORE_NAV } from "@/lib/constants";
// import { AppLogo } from "@/components/shared/app-logo";
// import { Button } from "@/components/ui/button";
// import { getCurrentProfile } from "@/lib/storefront";
// import { AuthStatus } from "@/components/store/auth-status";

// export async function StorefrontLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const profile = await getCurrentProfile();

//   return (
//     <div className="min-h-screen bg-transparent">
//       <header className="sticky top-0 z-40 border-b border-white/30 bg-gradient-to-r from-emerald-700 via-green-600 to-lime-500 shadow-soft backdrop-blur">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
//           <AppLogo />

//           <nav className="hidden items-center gap-3 md:flex">
//             {STORE_NAV.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="rounded-full px-4 py-2 text-sm font-semibold text-white/95 transition hover:bg-white/15"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-3">
//             <Link href="/cart">
//               <Button
//                 variant="outline"
//                 className="gap-2 border-white/40 bg-white/10 text-white hover:bg-white/20"
//               >
//                 <ShoppingCart className="h-4 w-4" />
//                 Cart
//               </Button>
//             </Link>

//             <AuthStatus fullName={profile?.fullName} />
//           </div>
//         </div>
//       </header>

//       <main>{children}</main>

//       <footer className="mt-16 border-t border-white/20 bg-gradient-to-r from-slate-950 via-emerald-950 to-green-900 text-white">
//         <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
//           <div>
//             <h3 className="text-xl font-black">FreshMart</h3>
//             <p className="mt-3 text-sm leading-7 text-white/75">
//               A modern supermarket platform for groceries, beverages, fresh produce,
//               household items, and everyday essentials.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
//               Shop
//             </h4>
//             <div className="mt-4 space-y-2 text-sm text-white/80">
//               <p>Groceries</p>
//               <p>Beverages</p>
//               <p>Fresh Produce</p>
//               <p>Household</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
//               Customer
//             </h4>
//             <div className="mt-4 space-y-2 text-sm text-white/80">
//               <p>My Account</p>
//               <p>Order History</p>
//               <p>Cart</p>
//               <p>Checkout</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-pink-300">
//               Service
//             </h4>
//             <div className="mt-4 space-y-2 text-sm text-white/80">
//               <p>Fast ordering</p>
//               <p>Secure checkout</p>
//               <p>Store management</p>
//               <p>Reliable support</p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/10">
//           <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-white/65 lg:px-8">
//             FreshMart supermarket platform — built for a modern, world-class retail experience.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



// import Link from "next/link";
// import { Search, ShoppingCart, Tag, User } from "lucide-react";
// import { STORE_NAV } from "@/lib/constants";
// import { AppLogo } from "@/components/shared/app-logo";
// import { Button } from "@/components/ui/button";
// import { getCurrentProfile } from "@/lib/storefront";
// import { AuthStatus } from "@/components/store/auth-status";
// import { getStoreCategories } from "@/lib/storefront";

// export async function StorefrontLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   const [profile, categories] = await Promise.all([
//     getCurrentProfile(),
//     getStoreCategories()
//   ]);

//   return (
//     <div className="min-h-screen bg-transparent">
//       <header className="sticky top-0 z-40 border-b border-black/5 bg-white shadow-sm">
//         <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
//           <AppLogo />

//           <div className="hidden flex-1 lg:block">
//             <div className="mx-auto flex max-w-2xl items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
//               <div className="px-4 text-slate-500">
//                 <Search className="h-5 w-5" />
//               </div>
//               <input
//                 placeholder="Search for groceries, drinks, toiletries..."
//                 className="h-12 w-full bg-transparent px-2 text-sm outline-none"
//               />
//               <button className="h-12 bg-orange-500 px-5 text-sm font-bold text-white hover:bg-orange-600">
//                 Search
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Link href="/cart">
//               <Button
//                 variant="outline"
//                 className="gap-2 border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
//               >
//                 <ShoppingCart className="h-4 w-4" />
//                 Cart
//               </Button>
//             </Link>
//             <AuthStatus fullName={profile?.fullName} />
//           </div>
//         </div>

//         <div className="hidden border-t border-slate-100 bg-white lg:block">
//           <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 lg:px-8">
//             <div className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-bold text-white">
//               <Tag className="h-4 w-4" />
//               Categories
//             </div>

//             <nav className="flex items-center gap-5 overflow-x-auto text-sm font-semibold text-slate-700">
//               {STORE_NAV.map((item) => (
//                 <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-green-700">
//                   {item.label}
//                 </Link>
//               ))}
//               {categories.slice(0, 6).map((category) => (
//                 <Link
//                   key={category.id}
//                   href={`/shop?category=${category.slug}`}
//                   className="whitespace-nowrap hover:text-green-700"
//                 >
//                   {category.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </header>

//       <main>{children}</main>

//       <footer className="mt-16 bg-slate-950 text-white">
//         <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
//           <div>
//             <h3 className="text-xl font-black">FreshMart</h3>
//             <p className="mt-3 text-sm leading-7 text-white/70">
//               Fast, reliable online supermarket for groceries, drinks, fresh produce,
//               household items, and personal care essentials.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
//               Shop
//             </h4>
//             <div className="mt-4 space-y-2 text-sm text-white/75">
//               <p>Groceries</p>
//               <p>Beverages</p>
//               <p>Fresh Produce</p>
//               <p>Household</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-green-300">
//               Customer
//             </h4>
//             <div className="mt-4 space-y-2 text-sm text-white/75">
//               <p>My Account</p>
//               <p>Orders</p>
//               <p>Cart</p>
//               <p>Checkout</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
//               Support
//             </h4>
//             <div className="mt-4 space-y-2 text-sm text-white/75">
//               <p>Fast ordering</p>
//               <p>Secure checkout</p>
//               <p>Reliable delivery flow</p>
//               <p>Store management</p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/10">
//           <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-white/60 lg:px-8">
//             FreshMart — your trusted Nigerian online supermarket.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import Link from "next/link";
import { Search, ShoppingCart, Tag } from "lucide-react";
import { STORE_NAV } from "@/lib/constants";
import { AppLogo } from "@/components/shared/app-logo";
import { Button } from "@/components/ui/button";
import { getCurrentProfile, getStoreCategories } from "@/lib/storefront";
import { AuthStatus } from "@/components/store/auth-status";

export async function StorefrontLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [profile, categories] = await Promise.all([
    getCurrentProfile(),
    getStoreCategories()
  ]);

  return (
    <div className="min-h-screen bg-transparent">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <AppLogo />

          <div className="hidden flex-1 lg:block">
            <div className="mx-auto flex max-w-2xl items-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="px-4 text-slate-500">
                <Search className="h-5 w-5" />
              </div>
              <input
                placeholder="Search for groceries, drinks, toiletries..."
                className="h-12 w-full bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button className="h-12 bg-orange-500 px-6 text-sm font-bold text-white transition hover:bg-orange-600">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/cart">
              <Button
                variant="outline"
                className="gap-2 rounded-2xl border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
              >
                <ShoppingCart className="h-4 w-4" />
                Cart
              </Button>
            </Link>
            <AuthStatus fullName={profile?.fullName} />
          </div>
        </div>

        <div className="hidden border-t border-slate-100 bg-white lg:block">
          <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 lg:px-8">
            <div className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-bold text-white shadow-sm">
              <Tag className="h-4 w-4" />
              Categories
            </div>

            <nav className="flex items-center gap-2 overflow-x-auto text-sm font-semibold text-slate-700">
              {STORE_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-green-700"
                >
                  {item.label}
                </Link>
              ))}
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  href={`/shop?category=${category.slug}`}
                  className="whitespace-nowrap rounded-xl px-3 py-2 transition hover:bg-slate-100 hover:text-green-700"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-16 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
          <div>
            <h3 className="text-xl font-black">FreshMart</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Fast, reliable online supermarket for groceries, drinks, fresh produce,
              household items, and personal care essentials.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
              Shop
            </h4>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>Groceries</p>
              <p>Beverages</p>
              <p>Fresh Produce</p>
              <p>Household</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-green-300">
              Customer
            </h4>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>My Account</p>
              <p>Orders</p>
              <p>Cart</p>
              <p>Checkout</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Support
            </h4>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>Fast ordering</p>
              <p>Secure checkout</p>
              <p>Reliable delivery flow</p>
              <p>Store management</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-white/60 lg:px-8">
            FreshMart — your trusted Nigerian online supermarket.
          </div>
        </div>
      </footer>
    </div>
  );
}