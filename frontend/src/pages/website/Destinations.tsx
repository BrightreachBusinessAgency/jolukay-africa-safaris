import maasaiMara from "../../assets/destinations/maasai-mara.jpg";
import amboseli from "../../assets/destinations/amboseli.jpg";
import lakeNakuru from "../../assets/destinations/lake-nakuru.jpg";
import serengeti from "../../assets/destinations/serengeti.jpg";
import samburu from "../../assets/destinations/samburu.jpg";
import zanzibar from "../../assets/destinations/zanzibar.jpg";

const destinations = [
  {
    name: "Maasai Mara",
    country: "Kenya",
    image: maasaiMara,
  },
  {
    name: "Amboseli",
    country: "Kenya",
    image: amboseli,
  },
  {
    name: "Lake Nakuru",
    country: "Kenya",
    image: lakeNakuru,
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    image: serengeti,
  },
  {
    name: "Samburu",
    country: "Kenya",
    image: samburu,
  },
  {
    name: "Zanzibar",
    country: "Tanzania",
    image: zanzibar,
  },
];

export default function Destinations() {
  return (
    <>
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold">Top Destinations</h1>

          <p className="mt-6 text-xl text-green-100">
            Discover East Africa's most breathtaking safari destinations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((place) => (
              <div
                key={place.name}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">
                  <h2 className="text-3xl font-bold">{place.name}</h2>

                  <p className="mt-3 text-gray-600">{place.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}