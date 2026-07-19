import { useEffect, useState } from "react";
import PackageCard from "../cards/PackageCard";
import API_URL from "../../services/api";

type Package = {
  id: number;
  title: string;
  slug: string;
  location: string;
  safari_type?: string;
  duration: string;
  price: string;
  featured_image_url: string;
};

export default function FeaturedPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/packages`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to load packages");
        }

        return res.json();
      })
      .then((data) => {
        setPackages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-green-700 font-semibold uppercase tracking-widest">
            Live Safari Packages
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Featured Safari Packages
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Discover our latest luxury safari experiences across East Africa.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center py-20 text-gray-500">
            Loading packages...
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="text-center py-20 text-red-600">
            Unable to load packages.
          </div>
        )}

        {/* Empty */}

        {!loading && !error && packages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No safari packages available yet.
          </div>
        )}

        {/* Packages */}

        {!loading && !error && packages.length > 0 && (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {packages.slice(0, 6).map((pkg) => (

              <PackageCard
                key={pkg.id}
                image={pkg.featured_image_url}
                title={pkg.title}
                location={pkg.location}
                duration={`${pkg.duration} Days`}
                price={`From $${pkg.price}`}
                safariType={pkg.safari_type}
                link={`/packages/${pkg.slug}`}
              />

            ))}

          </div>

        )}

      </div>
    </section>
  );
}