// import { notFound } from "next/navigation";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { Button } from "@/components/ui/button";
// import { demoProducts } from "@/lib/mock-data";

// function formatNaira(value: number) {
//   return new Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//     maximumFractionDigits: 0
//   }).format(value);
// }

// export default async function ProductDetailsPage({
//   params
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const product = demoProducts.find((item) => item.slug === slug);

//   if (!product) return notFound();

//   return (
//     <StorefrontLayout>
//       <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-2 lg:px-8">
//         <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
//           <img
//             src={product.thumbnailUrl ?? "https://placehold.co/800x600"}
//             alt={product.name}
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
//             Product details
//           </p>
//           <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
//             {product.name}
//           </h1>
//           <p className="mt-4 text-base leading-7 text-slate-600">
//             {product.description}
//           </p>

//           <div className="mt-6">
//             <p className="text-3xl font-black text-slate-950">
//               {formatNaira(product.price)}
//             </p>
//             <p className="mt-2 text-sm text-slate-500">
//               SKU: {product.sku} · Stock: {product.stockQuantity}
//             </p>
//           </div>

//           <div className="mt-8 flex gap-4">
//             <Button>Add to cart</Button>
//             <Button variant="outline">Buy now</Button>
//           </div>
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


// import { notFound } from "next/navigation";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { AddToCartButton } from "@/components/store/add-to-cart-button";
// import { Button } from "@/components/ui/button";
// import { getProductBySlug } from "@/lib/storefront";
// import { formatNaira } from "@/lib/format";

// export default async function ProductDetailsPage({
//   params
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const product = await getProductBySlug(slug);

//   if (!product) return notFound();

//   const primaryImage =
//     product.images?.find((image) => image.isPrimary)?.imageUrl ??
//     product.thumbnailUrl ??
//     "https://placehold.co/800x600";

//   return (
//     <StorefrontLayout>
//       <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-2 lg:px-8">
//         <div className="space-y-4">
//           <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
//             <img
//               src={primaryImage}
//               alt={product.name}
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {product.images?.length ? (
//             <div className="grid grid-cols-4 gap-3">
//               {product.images.map((image) => (
//                 <div
//                   key={image.id}
//                   className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
//                 >
//                   <img
//                     src={image.imageUrl}
//                     alt={image.altText ?? product.name}
//                     className="h-24 w-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           ) : null}
//         </div>

//         <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
//           <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
//             Product details
//           </p>
//           <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
//             {product.name}
//           </h1>
//           <p className="mt-4 text-base leading-7 text-slate-600">
//             {product.description}
//           </p>

//           <div className="mt-6">
//             <p className="text-3xl font-black text-slate-950">
//               {formatNaira(product.price)}
//             </p>
//             {product.compareAtPrice ? (
//               <p className="mt-2 text-base text-slate-400 line-through">
//                 {formatNaira(product.compareAtPrice)}
//               </p>
//             ) : null}
//             <p className="mt-2 text-sm text-slate-500">
//               SKU: {product.sku} · Stock: {product.stockQuantity}
//             </p>
//           </div>

//           <div className="mt-8 flex gap-4">
//             <AddToCartButton product={product} />
//             <AddToCartButton product={product} buyNow className="bg-orange-500 hover:bg-orange-600" />
//           </div>

//           {/* <div className="mt-8 flex gap-4">
//             <AddToCartButton product={product} />
//             <Button variant="outline">Buy now</Button>
//           </div> */}
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


import { notFound } from "next/navigation";
import { StorefrontLayout } from "@/components/store/storefront-layout";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { getProductBySlug } from "@/lib/storefront";
import { formatNaira } from "@/lib/format";

export default async function ProductDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const primaryImage =
    product.images?.find((image) => image.isPrimary)?.imageUrl ??
    product.thumbnailUrl ??
    "https://picsum.photos/seed/freshmart/800/600";

  return (
    <StorefrontLayout>
      <section className="bg-[#fff7e6]">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-slate-800 to-green-700 shadow-soft">
            <div className="px-6 py-10 text-white lg:px-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-green-300">
                Product details
              </p>
              <h1 className="mt-3 text-4xl font-black lg:text-5xl">{product.name}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                Explore price, stock availability, product information, and quick purchase options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-5 shadow-soft">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <img
                src={primaryImage}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            {product.images?.length ? (
              <div className="mt-5 grid grid-cols-4 gap-3">
                {product.images.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <img
                      src={image.imageUrl}
                      alt={image.altText ?? product.name}
                      className="h-24 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-green-700">
              In-store item
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              {product.name}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-6 rounded-3xl bg-orange-50 p-5">
              <p className="text-sm font-semibold text-orange-700">Current price</p>
              <p className="mt-2 text-4xl font-black text-slate-950">
                {formatNaira(product.price)}
              </p>
              {product.compareAtPrice ? (
                <p className="mt-2 text-base text-slate-400 line-through">
                  {formatNaira(product.compareAtPrice)}
                </p>
              ) : null}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">SKU</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{product.sku}</p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Stock available</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{product.stockQuantity}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <AddToCartButton product={product} className="px-6 py-3" />
              <AddToCartButton
                product={product}
                buyNow
                className="bg-orange-500 px-6 py-3 hover:bg-orange-600"
              />
            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-700">Shopping note</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Add this item to your cart or proceed directly to checkout. Product
                availability is based on current store stock.
              </p>
            </div>
          </div>
        </div>
      </section>
    </StorefrontLayout>
  );
}