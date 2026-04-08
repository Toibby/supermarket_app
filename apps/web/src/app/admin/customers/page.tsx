// import { AdminLayout } from "@/components/admin/admin-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function AdminCustomersPage() {
//   return (
//     <AdminLayout
//       title="Customers"
//       description="Review customer records, purchase history, and account data."
//     >
//       <ShellCard
//         title="Customer management shell"
//         description="Customer listing and details will be connected in later batches."
//       />
//     </AdminLayout>
//   );
// }


import { AdminLayout } from "@/components/admin/admin-layout";
import { getAdminCustomers, requireStaff } from "@/lib/admin";

export default async function AdminCustomersPage() {
  await requireStaff(["admin", "manager", "cashier"]);
  const customers = await getAdminCustomers();

  return (
    <AdminLayout
      title="Customers"
      description="View customer records and delivery details."
    >
      <div className="rounded-3xl border border-slate-200 p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Phone</th>
                <th className="py-3 pr-4">City</th>
                <th className="py-3 pr-4">State</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-slate-100">
                  <td className="py-3 pr-4 font-medium text-slate-900">{customer.fullName}</td>
                  <td className="py-3 pr-4">{customer.email}</td>
                  <td className="py-3 pr-4">{customer.phone ?? "-"}</td>
                  <td className="py-3 pr-4">{customer.city ?? "-"}</td>
                  <td className="py-3 pr-4">{customer.state ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}