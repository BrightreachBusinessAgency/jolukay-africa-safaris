import { useEffect, useState } from "react";

interface UserForm {
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
}

interface Props {
  open: boolean;
  loading: boolean;
  initialData?: UserForm | null;
  onClose: () => void;
  onSave: (data: UserForm) => void;
}

const emptyUser: UserForm = {
  name: "",
  email: "",
  password: "",
  role: "Admin",
  status: "Active",
};

export default function UserModal({
  open,
  loading,
  initialData,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<UserForm>(emptyUser);

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    } else {
      setForm(emptyUser);
    }
  }, [initialData, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8"
      >
        <h2 className="text-3xl font-bold mb-8">
          {initialData ? "Edit User" : "Create New User"}
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder={
                initialData
                  ? "Leave blank to keep current password"
                  : "Enter password"
              }
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium">Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Admin">Admin</option>
                <option value="Sales Officer">Sales Officer</option>
                <option value="Content Manager">Content Manager</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={() => {
              onClose();
            }}
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white px-8 py-3 rounded-xl transition"
          >
            {loading ? "Saving..." : initialData ? "Update User" : "Create User"}
          </button>
        </div>
      </form>
    </div>
  );
}