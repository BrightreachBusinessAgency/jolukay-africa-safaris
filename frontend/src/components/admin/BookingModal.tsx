import React from "react";

interface Booking {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  country?: string;
  destination?: string;
  package_name?: string;
  travel_date?: string;
  flexible_dates?: boolean;
  duration?: string;
  adults?: number;
  children?: number;
  accommodation?: string;
  safari_type?: string;
  budget?: string;
  special_requests?: string;
  status?: string;
}

interface Props {
  booking: Booking | null;
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({
  booking,
  open,
  onClose,
}: Props) {
  if (!open || !booking) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center border-b p-6">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">
              Booking #{booking.id}
            </h2>

            <p className="text-gray-500">
              JOLUKAY Africa Safaris
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-red-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <div className="p-8 space-y-8">

          <div>
            <h3 className="text-xl font-bold text-green-700 mb-3">
              Customer Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <p><strong>Name:</strong> {booking.full_name}</p>

              <p><strong>Email:</strong> {booking.email}</p>

              <p><strong>Phone:</strong> {booking.phone || "-"}</p>

              <p><strong>Country:</strong> {booking.country || "-"}</p>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-700 mb-3">
              Safari Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <p><strong>Destination:</strong> {booking.destination || "-"}</p>

              <p><strong>Package:</strong> {booking.package_name || "-"}</p>

              <p><strong>Travel Date:</strong> {booking.travel_date || "-"}</p>

              <p><strong>Flexible Dates:</strong> {booking.flexible_dates ? "Yes" : "No"}</p>

              <p><strong>Duration:</strong> {booking.duration || "-"}</p>

              <p><strong>Adults:</strong> {booking.adults}</p>

              <p><strong>Children:</strong> {booking.children}</p>

              <p><strong>Accommodation:</strong> {booking.accommodation || "-"}</p>

              <p><strong>Safari Type:</strong> {booking.safari_type || "-"}</p>

              <p><strong>Budget:</strong> {booking.budget || "-"}</p>

              <p><strong>Status:</strong> {booking.status}</p>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-green-700 mb-3">
              Special Requests
            </h3>

            <div className="border rounded-xl p-4 bg-gray-50">
              {booking.special_requests || "None"}
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