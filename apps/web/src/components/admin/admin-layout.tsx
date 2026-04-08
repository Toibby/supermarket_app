import Link from "next/link";
import { BarChart3, Boxes, LayoutDashboard, Package, ShoppingBag, Users, UsersRound, Warehouse } from "lucide-react";
import { ADMIN_NAV } from "@/lib/constants";
import { AppLogo } from "@/components/shared/app-logo";

const icons: Record<string, React.ReactNode> = {
  Dashboard: <LayoutDashboard className="h-4 w-4" />,
  Products: <Package className="h-4 w-4" />,
  Categories: <Boxes className="h-4 w-4" />,
  Inventory: <Warehouse className="h-4 w-4" />,
  Orders: <ShoppingBag className="h-4 w-4" />,
  Customers: <Users className="h-4 w-4" />,
  Workers: <UsersRound className="h-4 w-4" />,
  Analytics: <BarChart3 className="h-4 w-4" />
};

export function AdminLayout({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-slate-200 bg-white p-6">
          <AppLogo />
          <nav className="mt-8 space-y-2">
            {ADMIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {icons[item.label]}
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="p-6 lg:p-8">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft">
            <div className="border-b border-slate-200 pb-5">
              <h1 className="text-3xl font-black tracking-tight text-slate-950">{title}</h1>
              {description ? <p className="mt-2 text-slate-600">{description}</p> : null}
            </div>
            <div className="pt-6">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}