export default function FeaturedPackages() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured Safari Packages
          </h2>

          <p className="mt-4 text-gray-600">
            Explore our most popular safari adventures across East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-56 bg-gray-200"></div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                3 Days Maasai Mara
              </h3>

              <p className="text-gray-500 mt-2">
                Kenya
              </p>

              <p className="mt-4 text-green-700 text-2xl font-bold">
                From $650
              </p>

              <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-56 bg-gray-200"></div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Amboseli Adventure
              </h3>

              <p className="text-gray-500 mt-2">
                Kenya
              </p>

              <p className="mt-4 text-green-700 text-2xl font-bold">
                From $720
              </p>

              <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="h-56 bg-gray-200"></div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Serengeti Explorer
              </h3>

              <p className="text-gray-500 mt-2">
                Tanzania
              </p>

              <p className="mt-4 text-green-700 text-2xl font-bold">
                From $980
              </p>

              <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-xl">
                Book Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}