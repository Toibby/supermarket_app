// import { AdminLayout } from "@/components/admin/admin-layout";
// import { AdminStatCard } from "@/components/admin/admin-stat-card";

// export default function AdminDashboardPage() {
//   return (
//     <AdminLayout
//       title="Admin dashboard"
//       description="Operational overview for sales, orders, stock, customers, and workers."
//     >
//       <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
//         <AdminStatCard label="Today sales" value="₦0" helper="Real analytics in Batch 4" />
//         <AdminStatCard label="Orders" value="0" helper="Pending + fulfilled" />
//         <AdminStatCard label="Products" value="0" helper="Active catalog count" />
//         <AdminStatCard label="Low stock" value="0" helper="Inventory alerts later" />
//       </div>
//     </AdminLayout>
//   );
// }


import { AdminLayout } from "@/components/admin/admin-layout";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { formatNaira } from "@/lib/format";
import { getAdminDashboardData, requireStaff } from "@/lib/admin";

export default async function AdminDashboardPage() {
  await requireStaff(["admin", "manager", "cashier"]);
  const data = await getAdminDashboardData();

  return (
    <AdminLayout
      title="Admin dashboard"
      description="Operational overview for sales, orders, stock, customers, and workers."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <AdminStatCard label="Today sales" value={formatNaira(data.todaySales)} />
        <AdminStatCard label="Orders" value={String(data.ordersCount)} />
        <AdminStatCard label="Products" value={String(data.productsCount)} />
        <AdminStatCard label="Customers" value={String(data.customersCount)} />
        <AdminStatCard label="Workers" value={String(data.workersCount)} />
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 p-5">
        <h2 className="text-xl font-bold text-slate-900">Low stock alert</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-3 pr-4">Product</th>
                <th className="py-3 pr-4">SKU</th>
                <th className="py-3 pr-4">Stock</th>
                <th className="py-3 pr-4">Threshold</th>
              </tr>
            </thead>
            <tbody>
              {data.lowStock.map((item) => (
                <tr key={item.id} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">{item.name}</td>
                  <td className="py-3 pr-4">{item.sku}</td>
                  <td className="py-3 pr-4">{item.stockQuantity}</td>
                  <td className="py-3 pr-4">{item.lowStockThreshold}</td>
                </tr>
              ))}
              {!data.lowStock.length ? (
                <tr>
                  <td colSpan={4} className="py-6 text-slate-500">
                    No low stock products right now.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}