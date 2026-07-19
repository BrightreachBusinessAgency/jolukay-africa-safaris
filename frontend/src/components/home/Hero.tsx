import heroVideo from "../../assets/hero/hero-safari.mp4";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSafariPlanner = () => {
    const section = document.getElementById("plan-your-safari");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-24">
      <div className="relative h-screen">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 pt-24 md:pt-28 flex items-center">

          <div className="max-w-3xl text-white">

            <span className="inline-block bg-green-600 px-5 py-2 rounded-full font-semibold mb-8 shadow-lg">
              🌍 Kenya • Tanzania • Uganda • Rwanda
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Discover
              <span className="block text-green-400 mt-2">
                East Africa Like Never Before
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8">
              Experience unforgettable wildlife safaris,
              luxury lodges, breathtaking landscapes,
              and tailor-made adventures across East Africa.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Button onClick={scrollToSafariPlanner}>
                Book Your Safari
              </Button>

              <Button
                variant="secondary"
                onClick={() => navigate("/packages")}
              >
                Explore Packages
              </Button>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400">
                  500+
                </h2>

                <p className="mt-2 text-gray-200">
                  Happy Travellers
                </p>
              </div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400">
                  25+
                </h2>

                <p className="mt-2 text-gray-200">
                  Destinations
                </p>
              </div>

              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-green-400">
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