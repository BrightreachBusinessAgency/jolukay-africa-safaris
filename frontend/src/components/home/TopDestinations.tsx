import maasaiMara from "../../assets/destinations/maasai-mara.jpg";
import amboseli from "../../assets/destinations/amboseli.jpg";
import lakeNakuru from "../../assets/destinations/lake-nakuru.jpg";
import serengeti from "../../assets/destinations/serengeti.jpg";
import samburu from "../../assets/destinations/samburu.jpg";
import zanzibar from "../../assets/destinations/zanzibar.jpg";

const destinations = [
  {
    image: maasaiMara,
    name: "Maasai Mara",
    country: "Kenya",
    description:
      "Home of the Great Migration and Africa's Big Five wildlife experience.",
  },
  {
    image: amboseli,
    name: "Amboseli",
    country: "Kenya",
    description:
      "Magnificent elephants with breathtaking views of Mount Kilimanjaro.",
  },
  {
    image: lakeNakuru,
    name: "Lake Nakuru",
    country: "Kenya",
    description:
      "Famous for flamingos, rhinos and spectacular birdlife.",
  },
  {
    image: serengeti,
    name: "Serengeti",
    country: "Tanzania",
    description:
      "Endless plains filled with wildlife and unforgettable safari adventures.",
  },
  {
    image: samburu,
    name: "Samburu",
    country: "Kenya",
    description:
      "Discover rare wildlife species in Northern Kenya's unique landscape.",
  },
  {
    image: zanzibar,
    name: "Zanzibar",
    country: "Tanzania",
    description:
      "White sandy beaches, turquoise waters and luxurious island escapes.",
  },
];

export default function TopDestinations() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-green-700 font-semibold">
            Explore East Africa
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Top Safari Destinations
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Discover breathtaking landscapes, iconic wildlife,
            luxury lodges and unforgettable safari experiences across
            East Africa.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {destinations.map((place) => (

            <div
              key={place.name}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="relative">

                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-72 object-cover"
                />

                <span className="absolute top-5 left-5 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {place.country}
                </span>

              </div>

              <div className="p-8 pb-10">

                <h3 className="text-3xl font-bold">
                  {place.name}
                </h3>

                <p className="mt-5 text-gray-600 leading-7">
                  {place.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}