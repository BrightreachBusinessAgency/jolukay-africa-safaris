import SEO from "../../components/common/SEO";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Wildlife Game Drives",
    description:
      "Experience thrilling game drives through East Africa's famous national parks with experienced safari guides.",
  },
  {
    title: "Luxury Safari Adventures",
    description:
      "Travel in comfort with luxury lodges, premium safari vehicles and personalized itineraries.",
  },
  {
    title: "Family Safaris",
    description:
      "Create unforgettable memories with family-friendly safari experiences suitable for all ages.",
  },
  {
    title: "Honeymoon Safaris",
    description:
      "Celebrate your special moments with romantic safari escapes and luxury accommodation.",
  },
  {
    title: "Photography Safaris",
    description:
      "Capture Africa's incredible wildlife and landscapes with specially designed photography tours.",
  },
  {
    title: "Cultural Experiences",
    description:
      "Meet local communities and discover the rich traditions, culture and heritage of East Africa.",
  },
];

export default function Experiences() {
  return (
    <>
      <SEO
        title="Safari Experiences | JOLUKAY Africa Safaris"
        description="Discover unforgettable safari experiences across Kenya, Tanzania, Uganda and Rwanda."
      />

      {/* Hero */}

      <section className="bg-green-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Safari Experiences
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Discover authentic African adventures designed to create memories
            that last a lifetime.
          </p>

        </div>
      </section>

      {/* Experiences */}

      <section className="py-24 bg-stone-50">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {experiences.map((experience) => (

            <div
              key={experience.title}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <h2 className="text-2xl font-bold text-green-700">
                {experience.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {experience.description}
              </p>
            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto text-center px-8">

          <h2 className="text-4xl font-bold">
            Ready to Experience Africa?
          </h2>

          <p className="mt-6 text-gray-600">
            Let our safari specialists create a personalized itinerary for your
            next adventure.
          </p>

          <div className="mt-10">

            <Link to="/booking">
              <Button>
                Request Free Safari Quote
              </Button>
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}