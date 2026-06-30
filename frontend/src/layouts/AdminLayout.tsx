type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold">JOLUKAY</h2>

        <p className="text-sm text-blue-200 mt-1">
          Africa Safaris
        </p>

        <nav className="mt-10 space-y-4">
          <a href="#" className="block hover:text-yellow-300">
            Dashboard
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Bookings
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Customers
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Vehicles
          </a>

          <a href="#" className="block hover:text-yellow-300">
            Reports
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}