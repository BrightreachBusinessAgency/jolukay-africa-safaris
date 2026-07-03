import { useState } from "react";
import Button from "../../components/common/Button";
import {
  destinations,
  packages,
  budgets,
} from "../../data/bookingOptions";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    travelDate: "",
    destination: "",
    safariPackage: "",
    budget: "",
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert(
      "Thank you! Your safari enquiry has been received. Our safari specialist will contact you within 24 hours."
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Plan Your Safari
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Complete the form below and our travel experts will prepare your
            personalised safari quotation.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 px-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10">
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
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                required
              />

              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Number of Guests"
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                required
              />

              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                required
              />

              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
                required
              >
                <option value="">Select Destination</option>

                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>

              <select
                name="safariPackage"
                value={formData.safariPackage}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
              >
                <option value="">Select Safari Package</option>

                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
              >
                <option value="">Estimated Budget</option>

                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>

              <textarea
                rows={6}
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Tell us more about your safari..."
                className="md:col-span-2 border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
              />

              <div className="md:col-span-2">
                <Button type="submit">
                  Request Free Safari Quote
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit">
            <h2 className="text-2xl font-bold mb-6">
              Why Book With JOLUKAY?
            </h2>

            <ul className="space-y-5 text-gray-700">
              <li>✅ Tailor-made safari itineraries</li>
              <li>✅ Professional safari guides</li>
              <li>✅ Luxury safari vehicles</li>
              <li>✅ Competitive pricing</li>
              <li>✅ Fast response within 24 hours</li>
              <li>✅ Personalized travel planning</li>
            </ul>

            <div className="mt-10 border-t pt-6">
              <h3 className="font-bold text-lg">
                Need Immediate Assistance?
              </h3>

              <p className="mt-3 text-gray-600">
                Talk directly with one of our safari specialists on WhatsApp.
              </p>

              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}