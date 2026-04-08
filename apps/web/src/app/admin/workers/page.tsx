// import { AdminLayout } from "@/components/admin/admin-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function AdminWorkersPage() {
//   return (
//     <AdminLayout
//       title="Workers"
//       description="Admin can register workers, assign roles, and deactivate accounts."
//     >
//       <ShellCard
//         title="Worker management shell"
//         description="Role-based worker admin comes in Batch 4."
//       />
//     </AdminLayout>
//   );
// }


import { AdminLayout } from "@/components/admin/admin-layout";
import {
  createWorkerAction,
  toggleWorkerStatusAction
} from "@/app/admin/actions";
import { getAdminWorkers, requireStaff } from "@/lib/admin";

export default async function AdminWorkersPage() {
  await requireStaff(["admin"]);
  const workers = await getAdminWorkers();

  return (
    <AdminLayout
      title="Workers"
      description="Register workers, assign roles, and activate or deactivate them."
    >
      <div className="grid gap-8 lg:grid-cols-[440px_1fr]">
        <form action={createWorkerAction} className="rounded-3xl border border-slate-200 p-5">
          <h2 className="text-lg font-bold text-slate-900">Register worker</h2>
          <div className="mt-4 grid gap-4">
            <input name="fullName" placeholder="Full name" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="email" type="email" placeholder="Email" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="password" type="password" placeholder="Temporary password" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="employeeCode" placeholder="Employee code" required className="rounded-2xl border border-slate-300 px-4 py-3" />

            <select name="role" defaultValue="cashier" className="rounded-2xl border border-slate-300 px-4 py-3">
              <option value="admin">admin</option>
              <option value="manager">manager</option>
              <option value="cashier">cashier</option>
            </select>

            <button className="rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white">
              Save worker
            </button>
          </div>
        </form>

        <div className="rounded-3xl border border-slate-200 p-5">
          <h2 className="text-lg font-bold text-slate-900">Worker list</h2>
          <div className="mt-4 space-y-4">
            {workers.map((worker) => (
              <div
                key={worker.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between"
              >
                <div>
                  <div className="font-bold text-slate-900">
                    {worker.profile?.fullName ?? "Unknown worker"}
                  </div>
                  <div className="text-sm text-slate-600">
                    {worker.profile?.email} · {worker.employeeCode} · {worker.role}
                  </div>
                </div>

                <form action={toggleWorkerStatusAction}>
                  <input type="hidden" name="workerId" value={worker.id} />
                  <input type="hidden" name="profileId" value={worker.profileId} />
                  <input type="hidden" name="nextStatus" value={String(!worker.isActive)} />
                  <button
                    className={`rounded-2xl px-4 py-2.5 font-semibold text-white ${
                      worker.isActive ? "bg-red-600" : "bg-brand-600"
                    }`}
                  >
                    {worker.isActive ? "Deactivate" : "Activate"}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}