import { cn } from "@/lib/cn";

export function ShellCard({
  title,
  description,
  className,
  children
}: {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-3xl border border-slate-200 bg-white p-6 shadow-soft", className)}>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}