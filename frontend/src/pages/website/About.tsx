import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with honesty, transparency and professionalism in every safari we organize.",
  },
  {
    title: "Excellence",
    description:
      "We strive to deliver exceptional travel experiences from the first enquiry to your return home.",
  },
  {
    title: "Sustainability",
    description:
      "We promote responsible tourism that supports wildlife conservation and local communities.",
  },
  {
    title: "Customer First",
    description:
      "Every itinerary is designed around your dreams, comfort and unforgettable memories.",
  },
];

const stats = [
  { number: "500+", label: "Happy Travellers" },
  { number: "25+", label: "Destinations" },
  { number: "10+", label: "Years Combined Experience" },
  { number: "100%", label: "Tailor-made Safaris" },
];

export default function About() {
  return (
    <>
      {/* Hero */}

      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            About JOLUKAY Africa Safaris
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-4xl mx-auto">
            Creating unforgettable safari experiences across East Africa through
            personalized journeys, professional service and a passion for wildlife.
          </p>

        </div>
      </section>

      {/* Story */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8">

          <div>

            <h2 className="text-4xl font-bold">
              Our Story
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              JOLUKAY Africa Safaris was founded with one mission—to introduce
              travellers to the breathtaking beauty of East Africa through
              authentic, safe and memorable safari experiences.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              From Kenya's famous Maasai Mara to Tanzania's Serengeti,
              Uganda's mountain gorillas and Rwanda's breathtaking landscapes,
              we create journeys that combine wildlife, culture and luxury.
            </p>

          </div>

          <div className="bg-green-50 rounded-3xl p-10 shadow-lg">

            <h3 className="text-3xl font-bold text-green-700">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To deliver world-class safari experiences while promoting
              sustainable tourism, supporting conservation efforts and creating
              unforgettable memories for every traveller.
            </p>

            <h3 className="text-3xl font-bold text-green-700 mt-12">
              Our Vision
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To become one of Africa's most trusted safari brands, recognized
              globally for excellence, innovation and exceptional customer service.
            </p>

          </div>

        </div>
      </section>

      {/* Values */}

      <section className="py-24 bg-stone-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Our Core Values
            </h2>

            <p className="mt-6 text-gray-600">
              The principles that guide everything we do.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {values.map((value) => (

              <div
                key={value.title}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold text-green-700">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-24 bg-green-700 text-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-8">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="text-center"
            >
              <h2 className="text-5xl font-bold">
                {stat.number}
              </h2>

              <p className="mt-4 text-green-100">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-white">

        <div className="max-w-4xl mx-auto text-center px-8">

          <h2 className="text-4xl font-bold">
            Begin Your African Adventure
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Let our safari experts create a tailor-made journey that matches
            your dreams, budget and travel style.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">

            <Link to="/booking">
              <Button>
                Request Free Quote
              </Button>
            </Link>

            <Link to="/contact">
              <Button variant="secondary">
                Contact Us
              </Button>
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}