// import { AdminLayout } from "@/components/admin/admin-layout";
// import { ShellCard } from "@/components/shared/shell-card";

// export default function AdminCategoriesPage() {
//   return (
//     <AdminLayout
//       title="Categories"
//       description="Organize products into clean supermarket categories."
//     >
//       <ShellCard
//         title="Category management shell"
//         description="Create, update, and organize categories in Batch 4."
//       />
//     </AdminLayout>
//   );
// }



import { AdminLayout } from "@/components/admin/admin-layout";
import { createCategoryAction } from "@/app/admin/actions";
import { getAdminCategories, requireStaff } from "@/lib/admin";

export default async function AdminCategoriesPage() {
  await requireStaff(["admin", "manager"]);
  const categories = await getAdminCategories();

  return (
    <AdminLayout
      title="Categories"
      description="Create and manage product categories."
    >
      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
        <form action={createCategoryAction} className="rounded-3xl border border-slate-200 p-5">
          <h2 className="text-lg font-bold text-slate-900">Create category</h2>
          <div className="mt-4 grid gap-4">
            <input name="name" placeholder="Name" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="slug" placeholder="slug" required className="rounded-2xl border border-slate-300 px-4 py-3" />
            <textarea name="description" placeholder="Description" className="min-h-28 rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="imageUrl" placeholder="Image URL" className="rounded-2xl border border-slate-300 px-4 py-3" />
            <input name="sortOrder" type="number" placeholder="Sort order" defaultValue={0} className="rounded-2xl border border-slate-300 px-4 py-3" />
            <button className="rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white">
              Save category
            </button>
          </div>
        </form>

        <div className="rounded-3xl border border-slate-200 p-5">
          <h2 className="text-lg font-bold text-slate-900">Category list</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="py-3 pr-4">Name</th>
                  <th className="py-3 pr-4">Slug</th>
                  <th className="py-3 pr-4">Sort</th>
                  <th className="py-3 pr-4">Active</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id} className="border-b border-slate-100">
                    <td className="py-3 pr-4 font-medium text-slate-900">{category.name}</td>
                    <td className="py-3 pr-4">{category.slug}</td>
                    <td className="py-3 pr-4">{category.sortOrder}</td>
                    <td className="py-3 pr-4">{category.isActive ? "Yes" : "No"}</td>
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