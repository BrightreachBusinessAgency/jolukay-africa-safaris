interface Customer {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  status?: string;
}

interface Props {
  customer: Customer | null;
  open: boolean;
  onClose: () => void;
}

export default function CustomerModal({
  customer,
  open,
  onClose,
}: Props) {
  if (!open || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center border-b p-6">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">
              Customer Inquiry #{customer.id}
            </h2>

            <p className="text-gray-500">
              JOLUKAY Africa Safaris
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-red-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="p-8 space-y-8">

          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Customer Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <p><strong>Name:</strong> {customer.full_name}</p>
              <p><strong>Email:</strong> {customer.email}</p>
              <p><strong>Phone:</strong> {customer.phone || "-"}</p>
              <p><strong>Status:</strong> {customer.status}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Subject
            </h3>

            <div className="border rounded-xl p-4 bg-gray-50">
              {customer.subject || "-"}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Message
            </h3>

            <div className="border rounded-xl p-4 bg-gray-50 whitespace-pre-wrap">
              {customer.message || "-"}
            </div>
          </div>

        </div>

        <div className="border-t p-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}