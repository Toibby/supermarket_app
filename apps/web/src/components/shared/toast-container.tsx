"use client";

import { useToastStore } from "@/store/toast-store";

export function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);
  const remove = useToastStore((state) => state.remove);

  return (
    <div className="fixed right-4 top-20 z-[100] flex w-full max-w-sm flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-2xl border p-4 shadow-soft backdrop-blur ${
            toast.type === "success"
              ? "border-green-200 bg-green-50 text-green-900"
              : toast.type === "error"
              ? "border-red-200 bg-red-50 text-red-900"
              : "border-sky-200 bg-sky-50 text-sky-900"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold">{toast.title}</p>
              {toast.message ? (
                <p className="mt-1 text-sm opacity-90">{toast.message}</p>
              ) : null}
            </div>
            <button
              onClick={() => remove(toast.id)}
              className="text-xs font-bold opacity-60 hover:opacity-100"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}