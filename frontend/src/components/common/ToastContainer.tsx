type ToastItem = {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
};

export default function ToastContainer({ toasts }: { toasts: ToastItem[] }) {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 max-w-xs">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-2xl border px-4 py-3 shadow-2xl transition-transform duration-200 ${
            toast.type === 'success'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
              : toast.type === 'error'
              ? 'bg-rose-50 border-rose-300 text-rose-700'
              : toast.type === 'warning'
              ? 'bg-amber-50 border-amber-300 text-amber-700'
              : 'bg-slate-50 border-slate-300 text-slate-800'
          }`}
        >
          <p className="font-semibold capitalize">{toast.type}</p>
          <p className="mt-1 text-sm leading-6">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}
