// import Link from "next/link";
// import type { Category } from "@supermarket/shared";
// import { cn } from "@/lib/cn";

// export function ShopFilters({
//   categories,
//   activeCategory
// }: {
//   categories: Category[];
//   activeCategory?: string;
// }) {
//   return (
//     <div className="flex flex-wrap gap-3">
//       <Link
//         href="/shop"
//         className={cn(
//           "rounded-full border px-4 py-2 text-sm font-semibold",
//           !activeCategory
//             ? "border-brand-600 bg-brand-600 text-white"
//             : "border-slate-300 bg-white text-slate-700"
//         )}
//       >
//         All
//       </Link>

//       {categories.map((category) => (
//         <Link
//           key={category.id}
//           href={`/shop?category=${category.slug}`}
//           className={cn(
//             "rounded-full border px-4 py-2 text-sm font-semibold",
//             activeCategory === category.slug
//               ? "border-brand-600 bg-brand-600 text-white"
//               : "border-slate-300 bg-white text-slate-700"
//           )}
//         >
//           {category.name}
//         </Link>
//       ))}
//     </div>
//   );
// }


import Link from "next/link";
import type { Category } from "@supermarket/shared";
import { cn } from "@/lib/cn";

export function ShopFilters({
  categories,
  activeCategory
}: {
  categories: Category[];
  activeCategory?: string;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/shop"
        className={cn(
          "rounded-full border px-5 py-2.5 text-sm font-bold transition",
          !activeCategory
            ? "border-green-600 bg-green-600 text-white shadow-soft"
            : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
        )}
      >
        All
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/shop?category=${category.slug}`}
          className={cn(
            "rounded-full border px-5 py-2.5 text-sm font-bold transition",
            activeCategory === category.slug
              ? "border-orange-500 bg-orange-500 text-white shadow-soft"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}