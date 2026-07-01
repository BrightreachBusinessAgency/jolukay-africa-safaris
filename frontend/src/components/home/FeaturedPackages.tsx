import PackageCard from "../cards/PackageCard";

import maasaiMara from "../../assets/packages/maasai-mara.jpg";
import amboseli from "../../assets/packages/amboseli.jpg";
import diani from "../../assets/packages/diani.jpg";

export default function FeaturedPackages() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <span className="text-green-700 font-semibold uppercase tracking-widest">
            Most Popular
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Featured Safari Packages
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Carefully designed safari experiences across East Africa,
            combining wildlife, luxury accommodation and unforgettable memories.
          </p>

        </div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-8">

          <PackageCard
            image={maasaiMara}
            title="3 Days Maasai Mara"
            location="Kenya"
            duration="3 Days / 2 Nights"
            price="From $650"
          />

          <PackageCard
            image={amboseli}
            title="Amboseli Adventure"
            location="Kenya"
            duration="2 Days / 1 Night"
            price="From $520"
          />

          <PackageCard
            image={diani}
            title="Diani Beach Escape"
            location="Kenya"
            duration="4 Days / 3 Nights"
            price="From $950"
          />

        </div>

      </div>
    </section>
  );
}