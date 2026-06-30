export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Why Travel With JOLUKAY?
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          We provide unforgettable safari experiences with experienced guides,
          luxury vehicles and personalized itineraries across East Africa.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold">
              Expert Guides
            </h3>

            <p className="mt-4 text-gray-600">
              Professional local guides with years of safari experience.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold">
              Luxury Vehicles
            </h3>

            <p className="mt-4 text-gray-600">
              Comfortable 4x4 Land Cruisers and safari vans.
            </p>
          </div>

          <div className="p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold">
              Tailor-made Safaris
            </h3>

            <p className="mt-4 text-gray-600">
              Every trip is customized to your budget and interests.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}