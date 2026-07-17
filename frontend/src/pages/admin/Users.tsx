import { useEffect, useState } from "react";
import API_URL from "../../services/api";
import UserModal from "../../components/admin/UserModal";
import { useToast } from "../../components/common/ToastContext";
import DeleteUserModal from "../../components/admin/DeleteUserModal";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface UserResponse {
  data: User[];
}

export default function Users() {
  const { showToast } = useToast();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${API_URL}/admin/users`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Unable to load users.");
      }

      const json: UserResponse = await response.json();
      setUsers(json.data ?? []);
    } catch (error) {
      console.error(error);
      showToast("error", "Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async (form: any) => {
    setSaving(true);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        editingUser
          ? `${API_URL}/admin/users/${editingUser.id}`
          : `${API_URL}/admin/users`,
        {
          method: editingUser ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Unable to save user.");
      }

      showToast(
        "success",
        editingUser
          ? "User updated successfully."
          : "User created successfully."
      );

      setModalOpen(false);
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      showToast(
        "error",
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const confirmDelete = (user: User) => {
    setSelectedUser(user);
    setDeleteOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedUser) return;

    setDeleting(true);

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `${API_URL}/admin/users/${selectedUser.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Unable to delete user.");
      }

      showToast("success", "User deleted successfully.");
      setDeleteOpen(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      showToast(
        "error",
        error instanceof Error ? error.message : "Delete failed."
      );
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">Loading users...</h2>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Users Management
          </h1>
          <p className="text-slate-500 mt-2">
            Manage system users and their access permissions.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingUser(null);
            setModalOpen(true);
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition"
        >
          + Add User
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-10 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}

            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="px-6 py-5 font-semibold">{user.name}</td>
                <td className="px-6 py-5">{user.email}</td>
                <td className="px-6 py-5">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(user)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserModal
        open={modalOpen}
        loading={saving}
        initialData={
          editingUser
            ? {
                name: editingUser.name,
                email: editingUser.email,
                password: "",
                role: editingUser.role,
                status: editingUser.status,
              }
            : null
        }
        onClose={() => {
          setModalOpen(false);
          setEditingUser(null);
        }}
        onSave={handleSave}
      />

      <DeleteUserModal
        open={deleteOpen}
        loading={deleting}
        userName={selectedUser?.name}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedUser(null);
        }}
        onConfirm={handleDelete}
      />
    </div>
  );
}