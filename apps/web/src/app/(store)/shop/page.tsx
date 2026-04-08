// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { SectionHeader } from "@/components/shared/section-header";
// import { ProductGrid } from "@/components/store/product-grid";
// import { demoProducts } from "@/lib/mock-data";

// export default function ShopPage() {
//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
//         <SectionHeader
//           eyebrow="Shop"
//           title="All products"
//           description="This is the customer shop shell page. Filtering, search, real inventory, and backend connection come in later batches."
//         />
//         <div className="mt-8">
//           <ProductGrid products={demoProducts} />
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }



// import { StorefrontLayout } from "@/components/store/storefront-layout";
// import { SectionHeader } from "@/components/shared/section-header";
// import { ProductGrid } from "@/components/store/product-grid";
// import { ShopFilters } from "@/components/store/shop-filters";
// import { getStoreCategories, getStoreProducts } from "@/lib/storefront";

// export default async function ShopPage({
//   searchParams
// }: {
//   searchParams: Promise<{ category?: string }>;
// }) {
//   const params = await searchParams;
//   const activeCategory = params.category;
//   const [categories, products] = await Promise.all([
//     getStoreCategories(),
//     getStoreProducts(activeCategory)
//   ]);

//   return (
//     <StorefrontLayout>
//       <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
//         <SectionHeader
//           eyebrow="Shop"
//           title="All products"
//           description="Browse live products from your supermarket database."
//         />

//         <div className="mt-6">
//           <ShopFilters categories={categories} activeCategory={activeCategory} />
//         </div>

//         <div className="mt-8">
//           <ProductGrid products={products} />
//         </div>
//       </section>
//     </StorefrontLayout>
//   );
// }


import { StorefrontLayout } from "@/components/store/storefront-layout";
import { SectionHeader } from "@/components/shared/section-header";
import { ProductGrid } from "@/components/store/product-grid";
import { ShopFilters } from "@/components/store/shop-filters";
import { getStoreCategories, getStoreProducts } from "@/lib/storefront";

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category;
  const [categories, products] = await Promise.all([
    getStoreCategories(),
    getStoreProducts(activeCategory)
  ]);

  return (
    <StorefrontLayout>
      <section className="bg-[#fff7e6]">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-green-700 via-green-600 to-orange-500 shadow-soft">
            <div className="grid gap-6 px-6 py-10 text-white lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-green-100">
                  Supermarket shop
                </p>
                <h1 className="mt-3 text-4xl font-black lg:text-5xl">
                  Shop trusted groceries and daily essentials
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
                  Browse food items, drinks, fresh produce, household supplies,
                  snacks, and personal care products in one place.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/12 p-5 backdrop-blur">
                  <p className="text-sm text-white/80">Available products</p>
                  <h3 className="mt-2 text-3xl font-black">{products.length}</h3>
                </div>
                <div className="rounded-3xl bg-white/12 p-5 backdrop-blur">
                  <p className="text-sm text-white/80">Main categories</p>
                  <h3 className="mt-2 text-3xl font-black">{categories.length}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-8">
          <SectionHeader
            eyebrow="Browse by category"
            title="Choose a department"
            description="Filter products quickly by category and explore what is available in store."
          />

          <div className="mt-6">
            <ShopFilters categories={categories} activeCategory={activeCategory} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-2 lg:px-8">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft lg:p-8">
          <SectionHeader
            eyebrow="Store products"
            title={activeCategory ? `Showing ${activeCategory.replace(/-/g, " ")}` : "All available products"}
            description="Shop real supermarket products with clean browsing and quick actions."
          />

          <div className="mt-8">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>
    </StorefrontLayout>
  );
}