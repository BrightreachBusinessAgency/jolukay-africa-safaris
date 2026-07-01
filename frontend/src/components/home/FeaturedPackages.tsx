import PackageCard from "../cards/PackageCard";

export default function FeaturedPackages() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured Safari Packages
          </h2>

          <p className="mt-4 text-gray-600">
            Explore our most popular safari adventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <PackageCard
            title="3 Days Maasai Mara"
            location="Kenya"
            duration="3 Days / 2 Nights"
            price="From $650"
          />

          <PackageCard
            title="Amboseli Adventure"
            location="Kenya"
            duration="2 Days / 1 Night"
            price="From $520"
          />

          <PackageCard
            title="Serengeti Explorer"
            location="Tanzania"
            duration="5 Days / 4 Nights"
            price="From $1,250"
          />

        </div>

      </div>
    </section>
  );
}