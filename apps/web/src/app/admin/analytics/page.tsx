// import { AdminLayout } from "@/components/admin/admin-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function AdminAnalyticsPage() {
//   return (
//     <AdminLayout
//       title="Analytics"
//       description="Daily, weekly, monthly, quarterly, and yearly supermarket reporting."
//     >
//       <ShellCard
//         title="Analytics shell"
//         description="Charts and summary metrics come in Batch 4."
//       />
//     </AdminLayout>
//   );
// }


import { AdminLayout } from "@/components/admin/admin-layout";
import { AdminStatCard } from "@/components/admin/admin-stat-card";
import { formatNaira } from "@/lib/format";
import { getAnalyticsSummary, requireStaff } from "@/lib/admin";

export default async function AdminAnalyticsPage() {
  await requireStaff(["admin", "manager"]);
  const data = await getAnalyticsSummary();

  return (
    <AdminLayout
      title="Analytics"
      description="Daily, weekly, monthly, and yearly summaries."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard label="Today sales" value={formatNaira(data.todaySales)} />
        <AdminStatCard label="This week" value={formatNaira(data.weekSales)} />
        <AdminStatCard label="This month" value={formatNaira(data.monthSales)} />
        <AdminStatCard label="This year" value={formatNaira(data.yearSales)} />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard label="Total orders" value={String(data.totalOrders)} />
        <AdminStatCard label="Pending" value={String(data.pendingOrders)} />
        <AdminStatCard label="Processing" value={String(data.processingOrders)} />
        <AdminStatCard label="Delivered" value={String(data.deliveredOrders)} />
      </div>
    </AdminLayout>
  );
}