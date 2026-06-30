import WebsiteLayout from "../../layouts/WebsiteLayout";

export default function Home() {
  return (
    <WebsiteLayout>

      {/* HERO SECTION */}

      <section className="bg-[#F8F5F0]">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl">

            <p className="text-[#D4A017] font-semibold uppercase tracking-widest">
              Welcome to Jolukay Africa Safaris
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-tight text-gray-900">

              Experience Africa
              <br />
              Like Never Before

            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-8">

              Discover unforgettable wildlife adventures,
              breathtaking landscapes and tailor-made safari
              experiences across Kenya and East Africa.

            </p>

            <div className="mt-10 flex gap-4">

              <button className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800">

                Book Safari

              </button>

              <button className="border border-green-700 text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-700 hover:text-white">

                Explore Packages

              </button>

            </div>

          </div>

        </div>

      </section>

    </WebsiteLayout>
  );
}