import SEO from "../../components/common/SEO";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const packages = [
  {
    title: "2 Days Lake Nakuru Safari",
    duration: "2 Days / 1 Night",
    description:
      "Discover rhinos, flamingos, lions and breathtaking scenery in Lake Nakuru National Park.",
  },
  {
    title: "3 Days Maasai Mara Safari",
    duration: "3 Days / 2 Nights",
    description:
      "Experience Africa's most famous wildlife reserve and the Big Five with expert safari guides.",
  },
  {
    title: "5 Days Amboseli & Tsavo",
    duration: "5 Days / 4 Nights",
    description:
      "Enjoy spectacular elephant herds, Mount Kilimanjaro views and diverse wildlife.",
  },
  {
    title: "7 Days Kenya Explorer",
    duration: "7 Days / 6 Nights",
    description:
      "Visit Maasai Mara, Lake Nakuru and Amboseli on one unforgettable safari adventure.",
  },
  {
    title: "10 Days Kenya & Tanzania",
    duration: "10 Days / 9 Nights",
    description:
      "Cross borders and explore Maasai Mara, Serengeti and Ngorongoro Crater.",
  },
  {
    title: "Custom Safari",
    duration: "Flexible",
    description:
      "Build your own safari itinerary based on your budget, interests and travel dates.",
  },
];

export default function Packages() {
  return (
    <>
      <SEO
        title="Safari Packages | JOLUKAY Africa Safaris"
        description="Explore our carefully designed safari packages across Kenya, Tanzania, Uganda and Rwanda."
      />

      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Safari Packages
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Choose from our carefully designed safari experiences or let us
            create a tailor-made itinerary just for you.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <div className="bg-green-700 text-white p-6">
                <h2 className="text-2xl font-bold">
                  {pkg.title}
                </h2>

                <p className="mt-2 text-green-100">
                  {pkg.duration}
                </p>
              </div>

              <div className="p-6">
                <p className="text-gray-600 leading-7">
                  {pkg.description}
                </p>

                <div className="mt-8">
                  <Link to="/booking">
                    <Button className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}