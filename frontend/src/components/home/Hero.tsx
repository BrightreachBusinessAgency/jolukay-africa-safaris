import heroImage from "../../assets/hero.png";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-6">
            Explore Kenya • Tanzania • Uganda
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Discover Africa's
            <span className="text-green-700"> Wild Beauty</span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Experience unforgettable safaris, breathtaking landscapes,
            luxury accommodations and authentic African adventures with
            JOLUKAY Africa Safaris.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Button>
              Book Your Safari
            </Button>

            <Button variant="secondary">
              Explore Packages
            </Button>
          </div>

          <div className="flex gap-10 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-green-700">500+</h2>
              <p className="text-gray-500">Happy Travellers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-700">50+</h2>
              <p className="text-gray-500">Safari Destinations</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-700">10+</h2>
              <p className="text-gray-500">Years Experience</p>
            </div>

          </div>

        </div>

        <div>

          <img
            src={heroImage}
            alt="Safari"
            className="rounded-3xl shadow-2xl w-full"
          />

        </div>

      </div>
    </section>
  );
}