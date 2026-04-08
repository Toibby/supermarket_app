// import { Hero } from "@/components/store/hero";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { SectionHeader } from "@/components/shared/section-header";
// import { CategoryStrip } from "@/components/store/category-strip";
// import { ProductGrid } from "@/components/store/product-grid";
// import { demoCategories, demoProducts } from "@/lib/mock-data";

// export default function HomePage() {
//   return (
//     <StorefrontLayout>
//       <Hero />

//       <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
//         <SectionHeader
//           eyebrow="Categories"
//           title="Browse popular supermarket sections"
//           description="Core customer shopping sections prepared for the storefront."
//         />
//         <div className="mt-8">
//           <CategoryStrip categories={demoCategories} />
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
//         <SectionHeader
//           eyebrow="Featured products"
//           title="Products with images and pricing cards"
//           description="Batch 1 provides a strong frontend shell. Real Supabase-powered data comes in the next batches."
//         />
//         <div className="mt-8">
//           <ProductGrid products={demoProducts} />
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }



// import { Hero } from "@/components/store/hero";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { SectionHeader } from "@/components/shared/section-header";
// import { CategoryStrip } from "@/components/store/category-strip";
// import { ProductGrid } from "@/components/store/product-grid";
// import { getStoreCategories, getStoreProducts } from "@/lib/storefront";

// export default async function HomePage() {
//   const [categories, products] = await Promise.all([
//     getStoreCategories(),
//     getStoreProducts()
//   ]);

//   return (
//     <StorefrontLayout>
//       <Hero />

//       <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
//         <SectionHeader
//           eyebrow="Categories"
//           title="Browse popular supermarket sections"
//           description="Explore available product groups from the live catalog."
//         />
//         <div className="mt-8">
//           <CategoryStrip categories={categories} />
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
//         <SectionHeader
//           eyebrow="Featured products"
//           title="Live products from your store catalog"
//           description="Products below are now coming from Supabase."
//         />
//         <div className="mt-8">
//           <ProductGrid products={products.slice(0, 8)} />
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


// import { Hero } from "@/components/store/hero";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { SectionHeader } from "@/components/shared/section-header";
// import { CategoryStrip } from "@/components/store/category-strip";
// import { ProductGrid } from "@/components/store/product-grid";
// import { getStoreCategories, getStoreProducts } from "@/lib/storefront";

// export default async function HomePage() {
//   const [categories, products] = await Promise.all([
//     getStoreCategories(),
//     getStoreProducts()
//   ]);

//   return (
//     <StorefrontLayout>
//       <Hero />

//       <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
//         <SectionHeader
//           eyebrow="Shop by category"
//           title="Everything you need in one supermarket"
//           description="Browse essential supermarket categories for groceries, beverages, fresh produce, household items, and more."
//         />
//         <div className="mt-8">
//           <CategoryStrip categories={categories} />
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
//         <SectionHeader
//           eyebrow="Popular products"
//           title="Top picks from our store"
//           description="Discover customer favourites and essential products available in the store."
//         />
//         <div className="mt-8">
//           <ProductGrid products={products.slice(0, 8)} />
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


// import { Hero } from "@/components/store/hero";
// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { SectionHeader } from "@/components/shared/section-header";
// import { CategoryStrip } from "@/components/store/category-strip";
// import { ProductGrid } from "@/components/store/product-grid";
// import { getStoreCategories, getStoreProducts } from "@/lib/storefront";

// export default async function HomePage() {
//   const [categories, products] = await Promise.all([
//     getStoreCategories(),
//     getStoreProducts()
//   ]);

//   return (
//     <StorefrontLayout>
//       <Hero />

//       <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
//         <div className="rounded-[2rem] border border-white/30 bg-white/35 p-8 shadow-soft backdrop-blur">
//           <SectionHeader
//             eyebrow="Shop by category"
//             title="Everything you need in one supermarket"
//             description="Browse essential supermarket categories for groceries, beverages, fresh produce, household items, and more."
//           />
//           <div className="mt-8">
//             <CategoryStrip categories={categories} />
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
//         <div className="rounded-[2rem] border border-white/30 bg-white/35 p-8 shadow-soft backdrop-blur">
//           <SectionHeader
//             eyebrow="Popular products"
//             title="Top picks from our store"
//             description="Discover customer favourites and essential products available in the store."
//           />
//           <div className="mt-8">
//             <ProductGrid products={products.slice(0, 8)} />
//           </div>
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


import { Hero } from "@/components/store/hero";
import { StorefrontLayout } from "@/components/store/storefront-layout";
import { SectionHeader } from "@/components/shared/section-header";
import { CategoryStrip } from "@/components/store/category-strip";
import { ProductGrid } from "@/components/store/product-grid";
import { getStoreCategories, getStoreProducts } from "@/lib/storefront";

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getStoreCategories(),
    getStoreProducts()
  ]);

  return (
    <StorefrontLayout>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.75rem] bg-green-600 p-6 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-100">
              Fast shopping
            </p>
            <h3 className="mt-3 text-2xl font-black">Easy order flow</h3>
            <p className="mt-2 text-sm leading-6 text-green-50">
              Add products to cart quickly and complete checkout in minutes.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-orange-500 p-6 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-orange-100">
              Trusted products
            </p>
            <h3 className="mt-3 text-2xl font-black">Popular brands</h3>
            <p className="mt-2 text-sm leading-6 text-orange-50">
              Shop everyday household and grocery essentials customers already know.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-300">
              Reliable system
            </p>
            <h3 className="mt-3 text-2xl font-black">Customer + admin</h3>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Clean shopping frontend backed by inventory, orders, and analytics tools.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <SectionHeader
          eyebrow="Shop by category"
          title="Everything you need in one supermarket"
          description="Browse groceries, drinks, fresh produce, snacks, personal care, and household essentials."
        />
        <div className="mt-8">
          <CategoryStrip categories={categories} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 lg:px-8">
        <SectionHeader
          eyebrow="Popular products"
          title="Top picks from our store"
          description="Shop real everyday items customers buy often."
        />
        <div className="mt-8">
          <ProductGrid products={products.slice(0, 12)} />
        </div>
      </section>
    </StorefrontLayout>
  );
}