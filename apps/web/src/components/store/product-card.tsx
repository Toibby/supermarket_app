// import Link from "next/link";
// import type { Product } from "@supermarket/shared";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// function formatNaira(value: number) {
//   return new Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//     maximumFractionDigits: 0
//   }).format(value);
// }

// export function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
//       <div className="aspect-[4/3] bg-slate-100">
//         <img
//           src={product.thumbnailUrl ?? "https://placehold.co/600x400"}
//           alt={product.name}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <Link href={`/shop/${product.slug}`} className="text-lg font-bold text-slate-900 hover:text-brand-700">
//             {product.name}
//           </Link>
//           {product.featured ? <Badge>Featured</Badge> : null}
//         </div>

//         <p className="mt-2 line-clamp-2 text-sm text-slate-600">{product.description}</p>

//         <div className="mt-4 flex items-center justify-between">
//           <div>
//             <p className="text-xl font-black text-slate-950">{formatNaira(product.price)}</p>
//             {product.compareAtPrice ? (
//               <p className="text-sm text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//           </div>

//           <Link href={`/shop/${product.slug}`}>
//             <Button>View product</Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



// import Link from "next/link";
// import type { Product } from "@supermarket/shared";
// import { Badge } from "@/components/ui/badge";
// import { AddToCartButton } from "@/components/store/add-to-cart-button";
// import { formatNaira } from "@/lib/format";

// export function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
//       <div className="aspect-[4/3] bg-slate-100">
//         <img
//           src={product.thumbnailUrl ?? "https://placehold.co/600x400"}
//           alt={product.name}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <Link href={`/shop/${product.slug}`} className="text-lg font-bold text-slate-900 hover:text-brand-700">
//             {product.name}
//           </Link>
//           {product.featured ? <Badge>Featured</Badge> : null}
//         </div>

//         <p className="mt-2 line-clamp-2 text-sm text-slate-600">{product.description}</p>

//         <div className="mt-4 flex items-end justify-between gap-4">
//           <div>
//             <p className="text-xl font-black text-slate-950">{formatNaira(product.price)}</p>
//             {product.compareAtPrice ? (
//               <p className="text-sm text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//           </div>

//           <div className="flex gap-2">
//             <Link href={`/shop/${product.slug}`}>
//               <button className="rounded-2xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-900">
//                 View
//               </button>
//             </Link>
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import Link from "next/link";
// import type { Product } from "@supermarket/shared";
// import { Badge } from "@/components/ui/badge";
// import { AddToCartButton } from "@/components/store/add-to-cart-button";
// import { formatNaira } from "@/lib/format";

// export function ProductCard({ product }: { product: Product }) {
//   return (
//     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
//       <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 via-white to-green-50">
//         <img
//           src={product.thumbnailUrl ?? "https://placehold.co/600x400"}
//           alt={product.name}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <Link
//             href={`/shop/${product.slug}`}
//             className="text-lg font-bold text-slate-900 hover:text-brand-700"
//           >
//             {product.name}
//           </Link>
//           {product.featured ? (
//             <Badge className="bg-yellow-100 text-orange-700">Featured</Badge>
//           ) : null}
//         </div>

//         <p className="mt-2 line-clamp-2 text-sm text-slate-600">
//           {product.description}
//         </p>

//         <div className="mt-4 flex items-end justify-between gap-4">
//           <div>
//             <p className="text-xl font-black text-slate-950">
//               {formatNaira(product.price)}
//             </p>
//             {product.compareAtPrice ? (
//               <p className="text-sm text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//           </div>

//           <div className="flex gap-2">
//             <Link href={`/shop/${product.slug}`}>
//               <button className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-slate-900">
//                 View
//               </button>
//             </Link>
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import Link from "next/link";
// import type { Product } from "@supermarket/shared";
// import { Badge } from "@/components/ui/badge";
// import { AddToCartButton } from "@/components/store/add-to-cart-button";
// import { formatNaira } from "@/lib/format";


// export function ProductCard({ product }: { product: Product }) {

//   const imageSrc =
//   product.thumbnailUrl && product.thumbnailUrl.startsWith("http")
//     ? product.thumbnailUrl
//     : "https://dummyimage.com/800x600/7c3aed/ffffff&text=FreshMart";
//   // const imageSrc =
//   //   product.thumbnailUrl ||
//   //   product.images?.find((img) => img.isPrimary)?.imageUrl ||
//   //   "https://dummyimage.com/800x600/7c3aed/ffffff&text=FreshMart";

//     // console.log(product);

//   return (
//     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
//       <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 via-fuchsia-50 to-purple-100">
//         <img
//           src={imageSrc}
//           alt={product.name}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <Link
//             href={`/shop/${product.slug}`}
//             className="text-lg font-bold text-slate-900 hover:text-brand-700"
//           >
//             {product.name}
//           </Link>
//           {product.featured ? (
//             <Badge className="bg-violet-100 text-violet-700">Featured</Badge>
//           ) : null}
//         </div>

//         <p className="mt-2 line-clamp-2 text-sm text-slate-600">
//           {product.description}
//         </p>

//         <div className="mt-4 flex items-end justify-between gap-4">
//           <div>
//             <p className="text-xl font-black text-slate-950">
//               {formatNaira(product.price)}
//             </p>
//             {product.compareAtPrice ? (
//               <p className="text-sm text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//           </div>

//           <div className="flex gap-2">
//             <Link href={`/shop/${product.slug}`}>
//               <button className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-slate-900">
//                 View
//               </button>
//             </Link>
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import Link from "next/link";
// import type { Product } from "@supermarket/shared";
// import { Badge } from "@/components/ui/badge";
// import { AddToCartButton } from "@/components/store/add-to-cart-button";
// import { formatNaira } from "@/lib/format";

// function makeFallbackImage(label: string) {
//   const safeLabel = encodeURIComponent(label);
//   return `data:image/svg+xml;charset=UTF-8,
//     <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
//       <defs>
//         <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
//           <stop offset='0%' stop-color='%237c3aed'/>
//           <stop offset='100%' stop-color='%23a855f7'/>
//         </linearGradient>
//       </defs>
//       <rect width='800' height='600' fill='url(%23g)'/>
//       <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
//         fill='white' font-family='Arial, Helvetica, sans-serif' font-size='42' font-weight='700'>
//         ${safeLabel}
//       </text>
//     </svg>`.replace(/\n/g, "").replace(/\s{2,}/g, " ");
// }

// export function ProductCard({ product }: { product: Product }) {
//   const imageSrc =
//     product.thumbnailUrl && product.thumbnailUrl.startsWith("http")
//       ? product.thumbnailUrl
//       : makeFallbackImage(product.name);

//   return (
//     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
//       <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 via-fuchsia-50 to-purple-100">
//         <img
//           src={imageSrc}
//           alt={product.name}
//           className="h-full w-full object-cover"
//           onError={(e) => {
//             e.currentTarget.src = makeFallbackImage(product.name);
//           }}
//         />
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <Link
//             href={`/shop/${product.slug}`}
//             className="text-lg font-bold text-slate-900 hover:text-brand-700"
//           >
//             {product.name}
//           </Link>
//           {product.featured ? (
//             <Badge className="bg-violet-100 text-violet-700">Featured</Badge>
//           ) : null}
//         </div>

//         <p className="mt-2 line-clamp-2 text-sm text-slate-600">
//           {product.description}
//         </p>

//         <div className="mt-4 flex items-end justify-between gap-4">
//           <div>
//             <p className="text-xl font-black text-slate-950">
//               {formatNaira(product.price)}
//             </p>
//             {product.compareAtPrice ? (
//               <p className="text-sm text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//           </div>

//           <div className="flex gap-2">
//             <Link href={`/shop/${product.slug}`}>
//               <button className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-slate-900">
//                 View
//               </button>
//             </Link>
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import type { Product } from "@supermarket/shared";
// import { Badge } from "@/components/ui/badge";
// import { AddToCartButton } from "@/components/store/add-to-cart-button";
// import { formatNaira } from "@/lib/format";

// function makeFallbackImage(label: string) {
//   const safeLabel = encodeURIComponent(label);
//   return `data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%237c3aed'/><stop offset='100%' stop-color='%23a855f7'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial, Helvetica, sans-serif' font-size='42' font-weight='700'>${safeLabel}</text></svg>`;
// }

// export function ProductCard({ product }: { product: Product }) {
//   const imageSrc =
//     product.thumbnailUrl && product.thumbnailUrl.startsWith("http")
//       ? product.thumbnailUrl
//       : makeFallbackImage(product.name);

//   return (
//     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
//       <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 via-fuchsia-50 to-purple-100">
//         <img
//           src={imageSrc}
//           alt={product.name}
//           className="h-full w-full object-cover"
//           onError={(e) => {
//             e.currentTarget.src = makeFallbackImage(product.name);
//           }}
//         />
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <Link
//             href={`/shop/${product.slug}`}
//             className="text-lg font-bold text-slate-900 hover:text-brand-700"
//           >
//             {product.name}
//           </Link>
//           {product.featured ? (
//             <Badge className="bg-violet-100 text-violet-700">Featured</Badge>
//           ) : null}
//         </div>

//         <p className="mt-2 line-clamp-2 text-sm text-slate-600">
//           {product.description}
//         </p>

//         <div className="mt-4 flex items-end justify-between gap-4">
//           <div>
//             <p className="text-xl font-black text-slate-950">
//               {formatNaira(product.price)}
//             </p>
//             {product.compareAtPrice ? (
//               <p className="text-sm text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//           </div>

//           <div className="flex gap-2">
//             <Link href={`/shop/${product.slug}`}>
//               <button className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-slate-900">
//                 View
//               </button>
//             </Link>
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import type { Product } from "@supermarket/shared";
// import { Badge } from "@/components/ui/badge";
// import { AddToCartButton } from "@/components/store/add-to-cart-button";
// import { formatNaira } from "@/lib/format";

// export function ProductCard({ product }: { product: Product }) {
//   const imageSrc =
//     product.thumbnailUrl ||
//     product.images?.find((img) => img.isPrimary)?.imageUrl ||
//     "https://picsum.photos/seed/freshmart/800/600";

//   return (
//     <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
//       <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 via-fuchsia-50 to-purple-100">
//         <img
//           src={imageSrc}
//           alt={product.name}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-3">
//           <Link
//             href={`/shop/${product.slug}`}
//             className="text-lg font-bold text-slate-900 hover:text-brand-700"
//           >
//             {product.name}
//           </Link>
//           {product.featured ? (
//             <Badge className="bg-violet-100 text-violet-700">Featured</Badge>
//           ) : null}
//         </div>

//         <p className="mt-2 line-clamp-2 text-sm text-slate-600">
//           {product.description}
//         </p>

//         <div className="mt-4 flex items-end justify-between gap-4">
//           <div>
//             <p className="text-xl font-black text-slate-950">
//               {formatNaira(product.price)}
//             </p>
//             {product.compareAtPrice ? (
//               <p className="text-sm text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//           </div>

//           <div className="flex gap-2">
//             <Link href={`/shop/${product.slug}`}>
//               <button className="rounded-2xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-semibold text-slate-900">
//                 View
//               </button>
//             </Link>
//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import type { Product } from "@supermarket/shared";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { formatNaira } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const imageSrc =
    product.thumbnailUrl ||
    product.images?.find((img) => img.isPrimary)?.imageUrl ||
    "https://picsum.photos/seed/freshmart/800/600";

  return (
    <div className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={imageSrc}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            {product.featured ? (
              <Badge className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                Featured
              </Badge>
            ) : null}

            {product.stockQuantity <= product.lowStockThreshold ? (
              <Badge className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                Low stock
              </Badge>
            ) : null}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="min-h-[72px]">
          <Link
            href={`/shop/${product.slug}`}
            className="line-clamp-2 text-lg font-black leading-7 text-slate-900 transition hover:text-green-700"
          >
            {product.name}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4 border-t border-slate-100 pt-4">
          <div>
            <p className="text-2xl font-black text-slate-950">
              {formatNaira(product.price)}
            </p>
            {product.compareAtPrice ? (
              <p className="mt-1 text-sm text-slate-400 line-through">
                {formatNaira(product.compareAtPrice)}
              </p>
            ) : (
              <p className="mt-1 text-xs font-medium text-slate-400">
                In-store price
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <Link href={`/shop/${product.slug}`}>
              <button className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-100">
                View
              </button>
            </Link>
            <AddToCartButton product={product} className="rounded-2xl px-4 py-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
}