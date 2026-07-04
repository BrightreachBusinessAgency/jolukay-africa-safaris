import { useState } from "react";
import Button from "../../components/common/Button";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Backend API goes here later
    console.log(form);

    alert("Your message has been received. We'll contact you shortly.");

    setForm({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact JOLUKAY Africa Safaris
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Ready to experience Africa? Our safari experts are here to help
            you plan your unforgettable adventure.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">

          {/* Contact Details */}

          <div>

            <h2 className="text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="font-bold text-xl">📍 Office</h3>
                <p className="text-gray-600 mt-2">
                  Nakuru, Kenya
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">📞 Phone</h3>
                <p className="text-gray-600 mt-2">
                  +254 799 230 227
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">✉ Email</h3>
                <p className="text-gray-600 mt-2">
                  info@jolukayafricasafaris.com
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">🕒 Working Hours</h3>
                <p className="text-gray-600 mt-2">
                  Monday – Sunday
                  <br />
                  8:00 AM – 7:00 PM (EAT)
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your dream safari..."
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <Button>
                Send Message
              </Button>

            </form>

          </div>

        </div>
      </section>
    </>
  );
}