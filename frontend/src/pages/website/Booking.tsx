
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/common/Button";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  destination: "",
  packageName: "",
  travelDate: "",
  flexibleDates: "No",
  duration: "",
  adults: "1",
  children: "0",
  accommodation: "",
  safariType: "",
  budget: "",
  specialRequests: "",
};

export default function Booking() {
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);
 useEffect(() => {
  setForm((previous) => ({
    ...previous,
    destination:
      searchParams.get("destination") ?? previous.destination,

    travelDate:
      searchParams.get("date") ?? previous.travelDate,

    adults:
      searchParams.get("guests") ?? previous.adults,

    budget:
      searchParams.get("budget") ?? previous.budget,
  }));
}, [searchParams]); 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          destination: form.destination,
          package_name: form.packageName,
          travel_date: form.travelDate || null,
          flexible_dates: form.flexibleDates === "Yes",
          duration: form.duration,
          adults: Number(form.adults),
          children: Number(form.children),
          accommodation: form.accommodation || null,
          safari_type: form.safariType || null,
          budget: form.budget,
          special_requests: form.specialRequests,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit booking.");
      }

      showToast("success", "Your safari quotation request has been submitted successfully.");
      setForm(initialForm);
    } catch (error) {
      showToast(
        "error",
        error instanceof Error ? error.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Plan Your Safari</h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Tell us about your dream safari and we'll prepare a personalised quotation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            <h2 className="md:col-span-2 text-3xl font-bold text-green-700">Personal Information</h2>

            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" required className="border rounded-xl px-5 py-4"/>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="border rounded-xl px-5 py-4"/>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone / WhatsApp" required className="border rounded-xl px-5 py-4"/>
            <input name="country" value={form.country} onChange={handleChange} placeholder="Country" className="border rounded-xl px-5 py-4"/>

            <h2 className="md:col-span-2 text-3xl font-bold text-green-700 mt-4">Safari Details</h2>

            <select name="destination" value={form.destination} onChange={handleChange} required className="border rounded-xl px-5 py-4">
              <option value="">Preferred Destination</option>
              <option>Maasai Mara</option><option>Lake Nakuru</option><option>Amboseli</option>
              <option>Tsavo</option><option>Samburu</option><option>Serengeti</option>
              <option>Ngorongoro</option><option>Zanzibar</option><option>Custom Safari</option>
            </select>

            <input name="packageName" value={form.packageName} onChange={handleChange} placeholder="Preferred Package" className="border rounded-xl px-5 py-4"/>
            <input type="date" name="travelDate" value={form.travelDate} onChange={handleChange} required className="border rounded-xl px-5 py-4"/>

            <select name="flexibleDates" value={form.flexibleDates} onChange={handleChange} className="border rounded-xl px-5 py-4">
              <option>No</option><option>Yes</option>
            </select>

            <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration (e.g. 5 Days)" className="border rounded-xl px-5 py-4"/>
            <input type="number" name="adults" min="1" value={form.adults} onChange={handleChange} className="border rounded-xl px-5 py-4"/>
            <input type="number" name="children" min="0" value={form.children} onChange={handleChange} className="border rounded-xl px-5 py-4"/>

            <select name="accommodation" value={form.accommodation} onChange={handleChange} className="border rounded-xl px-5 py-4">
              <option value="">Accommodation</option>
              <option>Budget</option><option>Mid-range</option><option>Luxury</option><option>Ultra Luxury</option>
            </select>

            <select name="safariType" value={form.safariType} onChange={handleChange} className="border rounded-xl px-5 py-4">
              <option value="">Safari Type</option>
              <option>Private Safari</option><option>Shared Safari</option><option>Group Safari</option>
            </select>

            <input name="budget" value={form.budget} onChange={handleChange} placeholder="Estimated Budget" className="md:col-span-2 border rounded-xl px-5 py-4"/>

            <textarea rows={6} name="specialRequests" value={form.specialRequests} onChange={handleChange} placeholder="Special Requests" className="md:col-span-2 border rounded-xl px-5 py-4"/>

            <div className="md:col-span-2">
              <Button
  type="submit"
  disabled={loading}
>
  {loading ? "Submitting..." : "Request My Safari Quote"}
</Button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}
