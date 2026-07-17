import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../services/api";

interface Booking {
  id: number;
  name: string;
  email: string;
  package_name?: string;
  package?: string;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  subject?: string;
}

interface DashboardData {
  packages: number;
  gallery: number;
  bookings: number;
  customers: number;
  users: number;
  recentBookings: Booking[];
  recentCustomers: Customer[];
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState<DashboardData>({
    packages: 0,
    gallery: 0,
    bookings: 0,
    customers: 0,
    users: 0,
    recentBookings: [],
    recentCustomers: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(`${API_URL}/admin/dashboard`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Unable to load dashboard.");
      }

      const data = await response.json();

      setStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to JOLUKAY AFRICA SAFARIS Management System.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-blue-700">
          <p className="text-gray-500">
            Packages
          </p>

          <h2 className="text-4xl font-bold text-blue-700 mt-2">
            {stats.packages}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-green-700">
          <p className="text-gray-500">
            Gallery Images
          </p>

          <h2 className="text-4xl font-bold text-green-700 mt-2">
            {stats.gallery}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-yellow-500">
          <p className="text-gray-500">
            Bookings
          </p>

          <h2 className="text-4xl font-bold text-yellow-600 mt-2">
    {stats.bookings}
</h2>
</div>
                   <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-purple-700">
          <p className="text-gray-500">
            Customer Inquiries
          </p>

          <h2 className="text-4xl font-bold text-purple-700 mt-2">
            {stats.customers}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-red-700">
          <p className="text-gray-500">
            Users
          </p>

          <h2 className="text-4xl font-bold text-red-700 mt-2">
            {stats.users}
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Recent Bookings */}

        <div className="bg-white rounded-2xl shadow">

          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-bold">
              Recent Bookings
            </h2>
          </div>

          <div className="divide-y">

            {stats.recentBookings.length === 0 ? (

              <div className="p-6 text-gray-500">
                No bookings available.
              </div>

            ) : (

              stats.recentBookings.map((booking) => (

                <div
                  key={booking.id}
                  className="p-5 hover:bg-slate-50"
                >

                  <h3 className="font-semibold">
                    {booking.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {booking.email}
                  </p>

                  <p className="text-blue-700 text-sm mt-1">
                    {booking.package_name ??
                      booking.package ??
                      "Safari Booking"}
                  </p>

                </div>

              ))

            )}

          </div>

        </div>

        {/* Recent Customers */}

        <div className="bg-white rounded-2xl shadow">

          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-bold">
              Recent Customer Inquiries
            </h2>
          </div>

          <div className="divide-y">

            {stats.recentCustomers.length === 0 ? (

              <div className="p-6 text-gray-500">
                No customer inquiries.
              </div>

            ) : (

              stats.recentCustomers.map((customer) => (

                <div
                  key={customer.id}
                  className="p-5 hover:bg-slate-50"
                >

                  <h3 className="font-semibold">
                    {customer.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {customer.email}
                  </p>

                  <p className="text-sm text-slate-600 mt-1">
                    {customer.subject ??
                      "Customer Inquiry"}
                  </p>

                </div>

              ))

            )}

          </div>

        </div>

      </div>
             {/* Quick Actions */}

      <div className="bg-white rounded-2xl shadow">

        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-bold">
            Quick Actions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6">

          <Link
            to="/admin/packages/create"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl p-5 text-center font-semibold transition"
          >
            + Create Package
          </Link>

          <Link
            to="/admin/gallery"
            className="bg-green-700 hover:bg-green-800 text-white rounded-xl p-5 text-center font-semibold transition"
          >
            Upload Gallery Images
          </Link>

          <Link
            to="/admin/bookings"
            className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-xl p-5 text-center font-semibold transition"
          >
            View Bookings
          </Link>

          <Link
            to="/admin/customer-inquiries"
            className="bg-purple-700 hover:bg-purple-800 text-white rounded-xl p-5 text-center font-semibold transition"
          >
            Customer Inquiries
          </Link>

          <Link
            to="/admin/users"
            className="bg-red-700 hover:bg-red-800 text-white rounded-xl p-5 text-center font-semibold transition"
          >
            Manage Users
          </Link>

          <Link
            to="/admin/social-settings"
            className="bg-slate-700 hover:bg-slate-800 text-white rounded-xl p-5 text-center font-semibold transition"
          >
            Social Settings
          </Link>

        </div>

      </div>

    </div>
  );
}