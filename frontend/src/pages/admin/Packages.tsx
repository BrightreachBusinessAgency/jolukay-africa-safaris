import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";
import type { Package } from "../../types/packages";

export default function Packages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  const navigate = useNavigate();
  const { showToast } = useToast();

  const authToken = localStorage.getItem("adminToken");

  const fetchPackages = async () => {
    if (!authToken) {
      navigate("/admin/login");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/admin/packages`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Unable to load admin packages.");
      }

      const data = await response.json();

      const packageList = Array.isArray(data)
        ? data
        : data.data ?? [];

      setPackages(packageList);
    } catch (error) {
      showToast(
        "error",
        (error as Error).message || "Could not load packages."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleDelete = async (packageId: number) => {
    if (!window.confirm("Are you sure you want to delete this package?")) {
      return;
    }

    if (!authToken) {
      navigate("/admin/login");
      return;
    }

    setDeleting(packageId);

    try {
      const response = await fetch(`${API_URL}/admin/packages/${packageId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete package.");
      }

      showToast("success", "Package deleted successfully.");

      setPackages((current) =>
        current.filter((item) => item.id !== packageId)
      );
    } catch (error) {
      showToast("error", (error as Error).message || "Delete failed.");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="flex flex-col gap-4">

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Packages
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your safari package catalog.
          </p>
        </div>

        <Link to="/admin/packages/create">
          <Button>Create New Package</Button>
        </Link>

      </div>

      {loading ? (

        <div className="rounded-3xl bg-white p-12 shadow-sm text-center">
          Loading packages...
        </div>

      ) : packages.length === 0 ? (

        <div className="rounded-3xl bg-white p-12 shadow-sm text-center">
          No packages found.
        </div>

      ) : (

        <div className="overflow-hidden rounded-3xl border bg-white shadow">

          <table className="min-w-full divide-y divide-slate-200">

            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Type</th>
                <th className="px-6 py-4 text-left">Location</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">

              {packages.map((item) => (

                <tr key={item.id}>

                  <td className="px-6 py-4">{item.title}</td>

                  <td className="px-6 py-4">{item.safari_type}</td>

                  <td className="px-6 py-4">{item.location}</td>

                  <td className="px-6 py-4">
                    $
                    {Number(item.price ?? 0).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>

                  <td className="px-6 py-4">
                    {item.published ? "Published" : "Draft"}
                  </td>

                  <td className="px-6 py-4 space-x-2">

                    <Link
                      to={`/admin/packages/${item.id}/edit`}
                      className="rounded-full bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={deleting === item.id}
                      className="rounded-full bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
                    >
                      {deleting === item.id ? "Deleting..." : "Delete"}
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}