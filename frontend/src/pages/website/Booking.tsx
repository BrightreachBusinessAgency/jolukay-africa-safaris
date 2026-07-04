import { useState } from "react";
import Button from "../../components/common/Button";

export default function Booking() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    travelDate: "",
    destination: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Backend API will go here later
    console.log(form);

    alert("Thank you! Your safari quotation request has been received.");

    setForm({
      fullName: "",
      email: "",
      phone: "",
      guests: "",
      travelDate: "",
      destination: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Book Your Safari
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Complete the form below and our safari specialists will prepare a
            personalized quotation for your dream African adventure.
          </p>

        </div>
      </section>

      {/* Booking Form */}

      <section className="py-24 bg-stone-50">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold mb-10">
            Safari Booking Request
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >

            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              placeholder="Number of Guests"
              min="1"
              required
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="date"
              name="travelDate"
              value={form.travelDate}
              onChange={handleChange}
              required
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
              required
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            >
              <option value="">Select Destination</option>
              <option>Maasai Mara</option>
              <option>Lake Nakuru</option>
              <option>Amboseli</option>
              <option>Tsavo</option>
              <option>Samburu</option>
              <option>Serengeti</option>
              <option>Ngorongoro</option>
              <option>Zanzibar</option>
            </select>

            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your safari..."
              className="md:col-span-2 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <div className="md:col-span-2">

              <Button>
                Request Safari Quote
              </Button>

            </div>

          </form>

        </div>

      </section>
    </>
  );
}