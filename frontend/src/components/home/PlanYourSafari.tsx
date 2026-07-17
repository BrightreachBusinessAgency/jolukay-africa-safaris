import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlanYourSafari() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    destination: "",
    date: "",
    guests: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuote = () => {
    const params = new URLSearchParams({
      destination: form.destination,
      date: form.date,
      guests: form.guests,
      budget: form.budget,
    });

    navigate(`/booking?${params.toString()}`);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="bg-green-700 rounded-3xl p-12 shadow-2xl">

          <h2 className="text-5xl font-bold text-white text-center">
            Plan Your Safari
          </h2>

          <p className="text-center text-green-100 mt-4 text-lg max-w-3xl mx-auto">
            Tell us your travel plans and we'll prepare a personalised safari quotation.
          </p>

          <div className="grid md:grid-cols-5 gap-5 mt-10">

            <input
              type="text"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="Destination"
              className="rounded-xl p-4"
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="rounded-xl p-4"
            />

            <input
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              placeholder="Guests"
              min="1"
              className="rounded-xl p-4"
            />

            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="Estimated Budget"
              className="rounded-xl p-4"
            />

            <button
              onClick={handleQuote}
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition"
            >
              Request My Safari Quote
            </button>

          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-white/10 rounded-xl p-5">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-semibold text-white">
                500+ Happy Travellers
              </h3>
            </div>

            <div className="bg-white/10 rounded-xl p-5">
              <div className="text-3xl mb-2">🦁</div>
              <h3 className="font-semibold text-white">
                Tailor-made Safari Experiences
              </h3>
            </div>

            <div className="bg-white/10 rounded-xl p-5">
              <div className="text-3xl mb-2">⏱</div>
              <h3 className="font-semibold text-white">
                Response within 5 Minutes
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}