import { useState } from "react";
import Button from "../../components/common/Button";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";

export default function Contact() {
  const { showToast } = useToast();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
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

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      showToast(
        "success",
        "Thank you! Your message has been received. Our team will contact you shortly."
      );

      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      showToast(
        "error",
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact JOLUKAY Africa Safaris
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            We'd love to hear from you. Send us your question and our safari
            consultants will respond as soon as possible.
          </p>

        </div>
      </section>

      <section className="py-24 bg-stone-50">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">

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
                placeholder="Phone / WhatsApp"
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Select Subject</option>
                <option>General Inquiry</option>
                <option>Safari Booking</option>
                <option>Payments</option>
                <option>Partnership</option>
                <option>Feedback</option>
                <option>Complaint</option>
                <option>Other</option>
              </select>

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <Button
  type="submit"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</Button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}