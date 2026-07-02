import Button from "../common/Button";

export default function CallToAction() {
  return (
    <section className="bg-green-700 py-24">

      <div className="max-w-5xl mx-auto text-center px-8">

        <span className="uppercase tracking-widest text-green-200 font-semibold">
          Your Adventure Starts Here
        </span>

        <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
          Ready For Your Dream African Safari?
        </h2>

        <p className="mt-8 text-xl text-green-100 leading-8 max-w-3xl mx-auto">
          Whether you're planning your first safari or returning for another unforgettable adventure,
          our experienced team is ready to create a personalised itinerary just for you.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <Button>
            Request Quote
          </Button>

          <a
            href="https://wa.me/254711954622"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-green-700 transition"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}