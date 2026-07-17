import { useEffect, useState } from "react";
import API_URL from "../../services/api";
import BookingModal from "../../components/admin/BookingModal";

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
  status: string;
}

interface BookingResponse {
  data: Booking[];
}

export default function Bookings() {

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedBooking, setSelectedBooking] =
    useState<Booking | null>(null);

  const [openModal, setOpenModal] =
    useState(false);

  const token = localStorage.getItem("adminToken");

  const loadBookings = async () => {
    try {

      const response = await fetch(
        `${API_URL}/admin/bookings`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to load bookings.");
      }

      const json: BookingResponse =
        await response.json();

      setBookings(json.data ?? []);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const updateStatus = async (
    id: number,
    status: string
  ) => {
    try {

      await fetch(
        `${API_URL}/admin/bookings/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      loadBookings();

    } catch (error) {
      console.error(error);
    }
  };

  const deleteBooking = async (
    id: number
  ) => {

    if (
      !window.confirm(
        "Delete this booking permanently?"
      )
    ) {
      return;
    }

    try {

      await fetch(
        `${API_URL}/admin/bookings/${id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      loadBookings();

    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">
          Loading Bookings...
        </h2>
      </div>
    );
  }

  return (

    <div className="p-8 space-y-6">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Booking Requests
        </h1>

        <div className="bg-blue-700 text-white px-4 py-2 rounded-xl">
          Total Bookings: {bookings.length}
        </div>

      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-5 py-4 text-left">
                Customer
              </th>

              <th className="px-5 py-4 text-left">
                Destination
              </th>

              <th className="px-5 py-4 text-left">
                Travel Date
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>

              <th className="px-5 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>
                      {bookings.length === 0 ? (

            <tr>
              <td
                colSpan={5}
                className="text-center py-10 text-gray-500"
              >
                No booking requests found.
              </td>
            </tr>

          ) : (

            bookings.map((booking) => (

              <tr
                key={booking.id}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="px-5 py-4">

                  <div className="font-semibold">
                    {booking.full_name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {booking.email}
                  </div>

                </td>

                <td className="px-5 py-4">
                  {booking.destination || "-"}
                </td>

                <td className="px-5 py-4">
                  {booking.travel_date
                    ? new Date(
                        booking.travel_date
                      ).toLocaleDateString()
                    : "-"}
                </td>

                <td className="px-5 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      booking.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>

                </td>

                <td className="px-5 py-4">

                  <div className="flex flex-wrap justify-center gap-2">

                    <button
                      onClick={() => {
                        setSelectedBooking(booking);
                        setOpenModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      View
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          booking.id,
                          "Pending"
                        )
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Pending
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          booking.id,
                          "Approved"
                        )
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        deleteBooking(
                          booking.id
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
          <BookingModal
        booking={selectedBooking}
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedBooking(null);
        }}
      />

    </div>
  );
}