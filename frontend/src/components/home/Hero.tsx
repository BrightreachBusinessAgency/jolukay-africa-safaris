import heroImage from "../../assets/hero/hero-1.jpg";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative">

      {/* Background Image */}
      <div className="relative h-screen">

        <img
          src={heroImage}
          alt="JOLUKAY Africa Safaris"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">

          <div className="max-w-3xl text-white">

            <span className="inline-block bg-green-600 px-5 py-2 rounded-full font-semibold mb-8">
              🌍 Kenya • Tanzania • Uganda • Rwanda
            </span>

            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
              Discover
              <span className="block text-green-400">
                Africa's Wild Beauty
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-200 leading-9">
              Experience unforgettable wildlife safaris, luxury lodges,
              breathtaking landscapes and tailor-made adventures across
              East Africa.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Button>
                Book Your Safari
              </Button>

              <Button variant="secondary">
                Explore Packages
              </Button>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-5xl font-bold text-green-400">
                  500+
                </h2>

                <p className="mt-2 text-gray-200">
                  Happy Travellers
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-green-400">
                  25+
                </h2>

                <p className="mt-2 text-gray-200">
                  Destinations
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-green-400">
                  10+
                </h2>

                <p className="mt-2 text-gray-200">
                  Years Experience
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

          <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center">

            <div className="w-2 h-3 bg-white rounded-full mt-2"></div>

          </div>

        </div>

      </div>

    </section>
  );
}