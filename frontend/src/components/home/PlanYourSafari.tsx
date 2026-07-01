export default function PlanYourSafari() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="bg-green-700 rounded-3xl p-10 shadow-xl">

          <h2 className="text-4xl font-bold text-white text-center">
            Plan Your Safari
          </h2>

          <p className="text-center text-green-100 mt-3 mb-10">
            Tell us about your dream adventure and we'll prepare a personalised quotation.
          </p>

          <div className="grid md:grid-cols-5 gap-5">

            <input
              type="text"
              placeholder="Destination"
              className="rounded-xl p-4"
            />

            <input
              type="date"
              className="rounded-xl p-4"
            />

            <input
              type="number"
              placeholder="Guests"
              className="rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Budget"
              className="rounded-xl p-4"
            />

            <button
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold"
            >
              Request Quote
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}