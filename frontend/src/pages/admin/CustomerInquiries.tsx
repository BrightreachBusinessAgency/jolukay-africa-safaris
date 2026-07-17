import { useEffect, useState } from "react";
import API_URL from "../../services/api";
import CustomerModal from "../../components/admin/CustomerModal";

interface Customer {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  status: string;
}

interface CustomerResponse {
  data: Customer[];
}

export default function CustomerInquiries() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  const [openModal, setOpenModal] =
    useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    fetch(`${API_URL}/admin/customers`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to load inquiries");
        }

        const json: CustomerResponse = await res.json();

        setCustomers(json.data ?? []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <h2>Loading customer inquiries...</h2>
      </div>
    );
  }

  return (
    <div className="p-8">
            <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Customer Inquiries
          </h1>

          <p className="text-slate-500 mt-1">
            View and manage customer contact messages.
          </p>
        </div>

        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
          Total: {customers.length}
        </div>
      </div>

      {customers.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 shadow text-center">
          <p className="text-slate-500">
            No customer inquiries found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl bg-white shadow">

          <table className="min-w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="px-5 py-3 text-left">Customer</th>
                <th className="px-5 py-3 text-left">Subject</th>
                <th className="px-5 py-3 text-left">Status</th>
                <th className="px-5 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {customers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="px-5 py-4">
                    <div className="font-semibold">
                      {customer.full_name}
                    </div>

                    <div className="text-sm text-slate-500">
                      {customer.email}
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    {customer.subject || "-"}
                  </td>

                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                      {customer.status}
                    </span>
                  </td>
                                <td className="px-5 py-4 text-center">

                    <button
                      onClick={() => {
                        setSelectedCustomer(customer);
                        setOpenModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}    
            <CustomerModal
        customer={selectedCustomer}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedCustomer(null);
        }}
      />

    </div>
  );
}