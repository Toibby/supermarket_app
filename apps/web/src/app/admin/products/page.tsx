// import { AdminLayout } from "@/components/admin/admin-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function AdminProductsPage() {
//   return (
//     <AdminLayout
//       title="Products"
//       description="Manage supermarket products, pricing, images, status, and stock."
//     >
//       <ShellCard
//         title="Products table shell"
//         description="CRUD, upload images, search, and pagination come in Batch 4."
//       />
//     </AdminLayout>
//   );
// }


import { AdminLayout } from "@/components/admin/admin-layout";
import { createProductAction } from "@/app/admin/actions";
import { formatNaira } from "@/lib/format";
import { getAdminCategories, getAdminProducts, requireStaff } from "@/lib/admin";

export default async function AdminProductsPage() {
  await requireStaff(["admin", "manager"]);
  const [products, categories] = await Promise.all([
    getAdminProducts(),
    getAdminCategories()
  ]);

  return (
    <AdminLayout
      title="Products"
      description="Manage products, prices, stock, status, and thumbnails."
    >
      <div className="grid gap-8 lg:grid-cols-[460px_1fr]">
        <form action={createProductAction} className="rounded-3xl border border-slate-200 p-5">
          <h2 className="text-lg font-bold text-slate-900">Create product</h2>
          <div className="mt-4 grid gap-4">
            <input name="name" placeholder="Product name" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="slug" placeholder="slug" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <textarea name="description" placeholder="Description" className="min-h-28 rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="sku" placeholder="SKU" required className="rounded-2xl border border-slate-300 px-4 py-3" />

            <select name="categoryId" required className="rounded-2xl border border-slate-300 px-4 py-3">
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <input name="price" type="number" step="0.01" placeholder="Price" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="compareAtPrice" type="number" step="0.01" placeholder="Compare at price" className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="stockQuantity" type="number" placeholder="Stock quantity" defaultValue={0} required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="lowStockThreshold" type="number" placeholder="Low stock threshold" defaultValue={5} required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="thumbnailUrl" placeholder="Thumbnail URL" className="rounded-2xl border border-slate-300 px-4 py-3" />

            <select name="status" defaultValue="active" className="rounded-2xl border border-slate-300 px-4 py-3">
              <option value="active">active</option>
              <option value="draft">draft</option>
              <option value="archived">archived</option>
            </select>

            <label className="flex items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" name="featured" />
              Featured product
            </label>

            <button className="rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white">
              Save product
            </button>
          </div>
        </form>

        <div className="rounded-3xl border border-slate-200 p-5">
          <h2 className="text-lg font-bold text-slate-900">Product list</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="py-3 pr-4">Product</th>
                  <th className="py-3 pr-4">Category</th>
                  <th className="py-3 pr-4">Price</th>
                  <th className="py-3 pr-4">Stock</th>
                  <th className="py-3 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-slate-100">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.thumbnailUrl ?? "https://placehold.co/60x60"}
                          alt={product.name}
                          className="h-12 w-12 rounded-xl object-cover"
                        />
                        <div>
                          <div className="font-medium text-slate-900">{product.name}</div>
                          <div className="text-slate-500">{product.sku}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-4">{product.category?.name ?? "-"}</td>
                    <td className="py-3 pr-4">{formatNaira(product.price)}</td>
                    <td className="py-3 pr-4">{product.stockQuantity}</td>
                    <td className="py-3 pr-4">{product.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}