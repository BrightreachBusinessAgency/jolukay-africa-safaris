import Button from "../../components/common/Button";

export default function Booking() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Book Your Safari
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Complete the form below and our travel experts will prepare
            your personalised safari quotation.
          </p>

        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-stone-50">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">

          <h2 className="text-4xl font-bold mb-10">
            Safari Booking Request
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="number"
              placeholder="Number of Guests"
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="date"
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <select
              className="border rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-600 outline-none"
            >
              <option>Select Destination</option>
              <option>Maasai Mara</option>
              <option>Lake Nakuru</option>
              <option>Amboseli</option>
              <option>Tsavo</option>
              <option>Serengeti</option>
              <option>Zanzibar</option>
            </select>

            <textarea
              rows={6}
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