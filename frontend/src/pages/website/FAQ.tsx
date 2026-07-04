import SEO from "../../components/common/SEO";

const faqs = [
  {
    question: "When is the best time to visit Kenya for a safari?",
    answer:
      "Kenya offers exceptional wildlife viewing throughout the year. July to October is famous for the Great Migration, while January to March provides excellent game viewing and pleasant weather.",
  },
  {
    question: "Can I customize my safari itinerary?",
    answer:
      "Yes. Every safari can be tailored to your travel dates, budget, destinations and preferred activities.",
  },
  {
    question: "Do your packages include accommodation?",
    answer:
      "Yes. Most packages include carefully selected lodges or luxury tented camps unless stated otherwise.",
  },
  {
    question: "Do you provide airport transfers?",
    answer:
      "Yes. Airport transfers can be included in your safari package or booked separately.",
  },
  {
    question: "Which countries do you operate in?",
    answer:
      "We organize safaris in Kenya, Tanzania, Uganda and Rwanda with both private and group experiences.",
  },
  {
    question: "How do I book a safari?",
    answer:
      "Complete the booking form on our website or contact our team directly. We will prepare a personalized quotation for you.",
  },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | JOLUKAY Africa Safaris"
        description="Answers to common questions about safari bookings, travel, accommodation and East African wildlife adventures."
      />

      {/* Hero */}
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Everything you need to know before planning your African safari.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-5xl mx-auto px-8 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-green-700">
                {faq.question}
              </h2>

              <p className="mt-4 text-gray-600 leading-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}