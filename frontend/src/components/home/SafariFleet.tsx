const fleet = [
  "4x4 Land Cruiser",
  "Safari Van",
  "Luxury Jeep",
];

export default function SafariFleet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Our Safari Fleet
          </h2>

          <p className="text-gray-600 mt-4">
            Comfortable, reliable and adventure-ready vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {fleet.map((car) => (

            <div
              key={car}
              className="bg-stone-100 rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
            >

              <div className="h-56 bg-gray-300 flex items-center justify-center">
                Vehicle Image
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {car}
                </h3>

                <p className="text-gray-600 mt-3">
                  Fully maintained, comfortable seating and experienced drivers.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}