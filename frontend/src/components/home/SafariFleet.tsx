import landCruiser from "../../assets/fleet/land-cruiser.jpg";
import safariVan from "../../assets/fleet/safari-van.jpg";
import jeep from "../../assets/fleet/jeep.jpg";

const fleet = [
  {
    image: landCruiser,
    name: "Toyota Land Cruiser",
    capacity: "8 Passengers",
    features: "4x4 • Pop-up Roof • AC • Charging Ports",
  },
  {
    image: safariVan,
    name: "Safari Tour Van",
    capacity: "7 Passengers",
    features: "Pop-up Roof • Comfortable Seats • Luggage Space",
  },
  {
    image: jeep,
    name: "Luxury Safari Jeep",
    capacity: "3 Passengers",
    features: "Private Safari • 4x4 • Professional Guide",
  },
];

export default function SafariFleet() {
  return (
    <section className="py-24 bg-stone-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-green-700 font-semibold">
            Travel in Comfort
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Our Safari Fleet
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Experience Africa in comfort with our professionally maintained
            safari vehicles designed for unforgettable adventures.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {fleet.map((vehicle) => (

            <div
              key={vehicle.name}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-8 pb-10">

                <h3 className="text-3xl font-bold">
                  {vehicle.name}
                </h3>

                <p className="mt-4 text-green-700 font-semibold">
                  👥 {vehicle.capacity}
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  {vehicle.features}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}