import heroImage from "../../assets/hero/hero-1.jpg";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-flex items-center bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
            🌍 Kenya • Tanzania • Uganda • Rwanda
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
            Discover Africa's
            <br />
            <span className="text-green-700">
              Wild Beauty
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Experience unforgettable wildlife safaris, breathtaking
            landscapes, luxury accommodation and tailor-made adventures
            across East Africa with trusted local experts.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Button>
              Request a Quote
            </Button>

            <Button variant="secondary">
              Explore Packages
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h3 className="text-4xl font-bold text-green-700">
                500+
              </h3>
              <p className="text-gray-600 mt-2">
                Happy Travellers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-700">
                25+
              </h3>
              <p className="text-gray-600 mt-2">
                Destinations
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-green-700">
                10+
              </h3>
              <p className="text-gray-600 mt-2">
                Years Experience
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src={heroImage}
            alt="Luxury Safari Experience"
            className="rounded-3xl shadow-2xl w-full h-[650px] object-cover"
          />

          {/* Floating Experience Card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-5">

            <h4 className="font-bold text-lg">
              Luxury Safari
            </h4>

            <p className="text-gray-500 text-sm mt-1">
              Tailor-made adventures across East Africa
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}