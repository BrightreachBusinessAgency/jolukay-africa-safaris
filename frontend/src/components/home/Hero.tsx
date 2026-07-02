import heroImage from "../../assets/hero/hero-1.jpg";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-6">
            Explore Kenya • Tanzania • Uganda
          </span>

          <h1 className="text-6xl font-bold leading-tight text-slate-900">
            Discover Africa's{" "}
            <span className="text-green-700">
              Wild Beauty
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Experience unforgettable wildlife safaris, luxury accommodation,
            and tailor-made adventures across East Africa.
          </p>

          <div className="flex gap-5 mt-10">

            <Button>
              Request Quote
            </Button>

            <Button variant="secondary">
              Explore Packages
            </Button>

          </div>

        </div>

        <div>

          <img
            src={heroImage}
            alt="Safari"
            className="rounded-3xl shadow-2xl w-full h-[650px] object-cover"
          />

        </div>

      </div>
    </section>
  );
}