import Accordion from "../../components/common/Accordion";
import { faqs } from "../../data/faq";

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Find answers to the most common questions about our safari
            experiences and booking process.
          </p>

        </div>
      </section>

      {/* Questions */}
      <section className="bg-stone-50 py-24">

        <div className="max-w-4xl mx-auto px-8">

          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20">

        <div className="max-w-4xl mx-auto text-center px-8">

          <h2 className="text-4xl font-bold text-white">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-green-100 text-lg">
            Speak with our safari specialists today. We'll help you plan the
            perfect East African adventure.
          </p>

          <a
            href="/booking"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Request Free Safari Quote
          </a>

        </div>

      </section>
    </>
  );
}