const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United Kingdom 🇬🇧",
    comment:
      "Absolutely incredible experience! Professional guides, amazing wildlife and outstanding service from start to finish.",
  },
  {
    name: "James Miller",
    country: "USA 🇺🇸",
    comment:
      "The Maasai Mara safari exceeded every expectation. We saw the Big Five in just two days!",
  },
  {
    name: "Grace Wanjiku",
    country: "Kenya 🇰🇪",
    comment:
      "Very organized company with clean safari vehicles and friendly staff. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="uppercase tracking-widest text-green-700 font-semibold">
            Client Reviews
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What Our Guests Say
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Hundreds of travellers have trusted JOLUKAY Africa Safaris to
            create unforgettable adventures.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {testimonials.map((review) => (

            <div
              key={review.name}
              className="bg-stone-50 rounded-3xl shadow-lg p-10 hover:shadow-2xl transition"
            >

              <div className="text-yellow-500 text-2xl">
                ★★★★★
              </div>

              <p className="mt-6 text-gray-600 leading-8 italic">
                "{review.comment}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {review.name}
                </h3>

                <p className="text-green-700 mt-2">
                  {review.country}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}