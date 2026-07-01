const destinations = [
  {
    name: "Maasai Mara",
    country: "Kenya",
    description: "Witness the world-famous Great Migration.",
  },
  {
    name: "Amboseli",
    country: "Kenya",
    description: "Elephants beneath Mount Kilimanjaro.",
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    description: "Endless plains and abundant wildlife.",
  },
  {
    name: "Ngorongoro",
    country: "Tanzania",
    description: "Africa's breathtaking wildlife crater.",
  },
];

export default function TopDestinations() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Top Destinations
          </h2>

          <p className="text-gray-600 mt-4">
            Explore Africa's most iconic safari destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {destinations.map((destination) => (

            <div
              key={destination.name}
              className="bg-white rounded-3xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
            >

              <div className="h-52 bg-gray-200 flex items-center justify-center">
                Destination Image
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {destination.name}
                </h3>

                <p className="text-green-700 font-medium mt-2">
                  {destination.country}
                </p>

                <p className="text-gray-600 mt-4">
                  {destination.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}