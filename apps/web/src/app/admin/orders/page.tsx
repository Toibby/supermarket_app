// import { AdminLayout } from "@/components/admin/admin-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function AdminOrdersPage() {
//   return (
//     <AdminLayout
//       title="Orders"
//       description="Monitor customer orders, payment state, and fulfilment."
//     >
//       <ShellCard
//         title="Orders management shell"
//         description="Admin order actions and status workflow come in Batch 4."
//       />
//     </AdminLayout>
//   );
// }


import { AdminLayout } from "@/components/admin/admin-layout";
import { updateOrderStatusAction } from "@/app/admin/actions";
import { formatNaira } from "@/lib/format";
import { getAdminOrders, requireStaff } from "@/lib/admin";

export default async function AdminOrdersPage() {
  await requireStaff(["admin", "manager", "cashier"]);
  const orders = await getAdminOrders();

  return (
    <AdminLayout
      title="Orders"
      description="Manage order flow and payment state."
    >
      <div className="space-y-5">
        {orders.map((order) => (
          <div key={order.id} className="rounded-3xl border border-slate-200 p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{order.orderNumber}</h3>
                <p className="text-sm text-slate-500">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <form action={updateOrderStatusAction} className="flex flex-wrap items-center gap-3">
                <input type="hidden" name="orderId" value={order.id} />

                <select
                  name="status"
                  defaultValue={order.status}
                  className="rounded-2xl border border-slate-300 px-4 py-2.5"
                >
                  <option value="pending">pending</option>
                  <option value="confirmed">confirmed</option>
                  <option value="processing">processing</option>
                  <option value="delivered">delivered</option>
                  <option value="cancelled">cancelled</option>
                </select>

                <select
                  name="paymentStatus"
                  defaultValue={order.paymentStatus}
                  className="rounded-2xl border border-slate-300 px-4 py-2.5"
                >
                  <option value="pending">pending</option>
                  <option value="paid">paid</option>
                  <option value="failed">failed</option>
                  <option value="refunded">refunded</option>
                </select>

                <button className="rounded-2xl bg-brand-600 px-4 py-2.5 font-semibold text-white">
                  Update
                </button>
              </form>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {order.items?.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.productName} × {item.quantity}
                  </span>
                  <span>{formatNaira(item.subtotal)}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 font-bold text-slate-900">
              <span>Total</span>
              <span>{formatNaira(order.totalAmount)}</span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}