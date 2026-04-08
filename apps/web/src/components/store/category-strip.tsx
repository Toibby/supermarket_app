// import Link from "next/link";
// import type { Category } from "@supermarket/shared";

// export function CategoryStrip({ categories }: { categories: Category[] }) {
//   return (
//     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//       {categories.map((category) => (
//         <Link
//           key={category.id}
//           href={`/shop?category=${category.slug}`}
//           className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5"
//         >
//           <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
//           <p className="mt-2 text-sm text-slate-600">{category.description}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// import Link from "next/link";
// import type { Category } from "@supermarket/shared";

// const categoryStyles = [
//   "from-yellow-100 to-orange-100 border-yellow-200",
//   "from-sky-100 to-blue-100 border-sky-200",
//   "from-green-100 to-emerald-100 border-green-200",
//   "from-pink-100 to-rose-100 border-pink-200",
//   "from-purple-100 to-fuchsia-100 border-purple-200",
//   "from-lime-100 to-green-100 border-lime-200"
// ];

// export function CategoryStrip({ categories }: { categories: Category[] }) {
//   return (
//     <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//       {categories.map((category, index) => (
//         <Link
//           key={category.id}
//           href={`/shop?category=${category.slug}`}
//           className={`rounded-[2rem] border bg-gradient-to-br p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow ${
//             categoryStyles[index % categoryStyles.length]
//           }`}
//         >
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <h3 className="text-xl font-black text-slate-900">{category.name}</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-700">
//                 {category.description}
//               </p>
//             </div>
//             <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-slate-700">
//               Shop
//             </span>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

import Link from "next/link";
import { Apple, Beef, Candy, CookingPot, GlassWater, SprayCan } from "lucide-react";
import type { Category } from "@supermarket/shared";

const icons = [CookingPot, GlassWater, Apple, SprayCan, Candy, Beef];
const styles = [
  "bg-orange-50 border-orange-200 text-orange-700",
  "bg-sky-50 border-sky-200 text-sky-700",
  "bg-green-50 border-green-200 text-green-700",
  "bg-purple-50 border-purple-200 text-purple-700",
  "bg-pink-50 border-pink-200 text-pink-700",
  "bg-yellow-50 border-yellow-200 text-yellow-700"
];

export function CategoryStrip({ categories }: { categories: Category[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {categories.map((category, index) => {
        const Icon = icons[index % icons.length];
        const style = styles[index % styles.length];

        return (
          <Link
            key={category.id}
            href={`/shop?category=${category.slug}`}
            className="rounded-[1.7rem] bg-white p-4 shadow-soft transition hover:-translate-y-1"
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${style}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-black text-slate-900">{category.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
          </Link>
        );
      })}
    </div>
  );
}