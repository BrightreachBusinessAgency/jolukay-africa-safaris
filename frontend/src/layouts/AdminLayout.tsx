import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const navItem =
  "block rounded-2xl px-4 py-3 transition hover:bg-blue-800";

export default function AdminLayout({ children }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}

      <aside className="w-72 bg-blue-900 text-white flex flex-col">

        <div className="p-6 border-b border-blue-800">

          <h2 className="text-2xl font-bold tracking-wide">
            JOLUKAY
          </h2>

          <p className="text-blue-200 text-sm">
            Africa Safaris
          </p>

        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">

          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `${navItem} ${isActive ? "bg-blue-800 text-yellow-300" : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/packages"
            className={({ isActive }) =>
              `${navItem} ${isActive ? "bg-blue-800 text-yellow-300" : ""}`
            }
          >
            Packages
          </NavLink>

          <NavLink
            to="/admin/gallery"
            className={({ isActive }) =>
              `${navItem} ${isActive ? "bg-blue-800 text-yellow-300" : ""}`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/admin/bookings"
            className={({ isActive }) =>
              `${navItem} ${isActive ? "bg-blue-800 text-yellow-300" : ""}`
            }
          >
            Bookings
          </NavLink>

          <NavLink
            to="/admin/customer-inquiries"
            className={({ isActive }) =>
              `${navItem} ${isActive ? "bg-blue-800 text-yellow-300" : ""}`
            }
          >
            Customer Inquiries
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `${navItem} ${isActive ? "bg-blue-800 text-yellow-300" : ""}`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/admin/social-settings"
            className={({ isActive }) =>
              `${navItem} ${isActive ? "bg-blue-800 text-yellow-300" : ""}`
            }
          >
            Social Settings
          </NavLink>

        </nav>

        <div className="p-4 border-t border-blue-800 space-y-3">

          <Link
            to="/"
            className="block rounded-2xl px-4 py-3 hover:bg-blue-800 transition"
          >
            Return to Website
          </Link>

          <button
            onClick={handleLogout}
            className="w-full rounded-2xl bg-red-600 py-3 hover:bg-red-500 transition"
          >
            Logout
          </button>

        </div>

      </aside>

      <main className="flex-1 p-8 overflow-auto">
        {children ?? <Outlet />}
      </main>

    </div>
  );
}