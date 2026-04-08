// import { AdminLayout } from "@/components/admin/admin-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function AdminInventoryPage() {
//   return (
//     <AdminLayout
//       title="Inventory"
//       description="Track stock movement, restocks, and stock deductions."
//     >
//       <ShellCard
//         title="Inventory shell"
//         description="Inventory logs and stock actions come in Batch 4."
//       />
//     </AdminLayout>
//   );
// }


import { AdminLayout } from "@/components/admin/admin-layout";
import { restockProductAction } from "@/app/admin/actions";
import { getInventoryRows, requireStaff } from "@/lib/admin";

export default async function AdminInventoryPage() {
  await requireStaff(["admin", "manager"]);
  const products = await getInventoryRows();

  return (
    <AdminLayout
      title="Inventory"
      description="Track stock levels and restock products."
    >
      <div className="space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid gap-4 rounded-3xl border border-slate-200 p-5 lg:grid-cols-[1fr_360px]"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
              <p className="mt-1 text-sm text-slate-500">
                SKU: {product.sku} · Current stock: {product.stockQuantity} · Low stock threshold: {product.lowStockThreshold}
              </p>
            </div>

            <form action={restockProductAction} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input type="hidden" name="productId" value={product.id} />
              <input
                name="quantity"
                type="number"
                min={1}
                placeholder="Restock qty"
                required
                className="rounded-2xl border border-slate-300 px-4 py-3"
              />
              <input
                name="reason"
                placeholder="Reason"
                defaultValue="Admin restock"
                className="rounded-2xl border border-slate-300 px-4 py-3"
              />
              <button className="rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white">
                Restock
              </button>
            </form>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}