import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/common/SEO";
import PackageCard from "../../components/cards/PackageCard";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";
import type { Package } from "../../types/packages";

function formatUSD(value: number | string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

export default function Packages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/packages`);
        if (!response.ok) {
          throw new Error("Failed to load packages.");
        }

        const data = await response.json();
        setPackages(data);
      } catch (err) {
        setError("Unable to load packages.");
        showToast("error", "Packages could not be loaded.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [showToast]);

  return (
    <>
      <SEO
        title="Safari Packages | JOLUKAY Africa Safaris"
        description="Explore our carefully designed safari packages across Kenya and East Africa."
      />

      <section className="bg-green-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Safari Packages</h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
            Choose from our carefully designed safari experiences or request a tailored quote for a custom itinerary.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-green-700 font-semibold">
                Live safari packages
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mt-3">Discover your next safari adventure</h2>
            </div>
            <Link to="/booking">
              <button className="inline-flex items-center justify-center rounded-full bg-green-700 px-8 py-3 text-white font-semibold transition hover:bg-green-800">
                Request Quote
              </button>
            </Link>
          </div>

          {loading ? (
            <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center shadow-sm">
              <p className="text-xl text-slate-600">Loading safari packages...</p>
            </div>
          ) : error ? (
            <div className="rounded-3xl bg-white border border-rose-200 p-12 text-center shadow-sm">
              <p className="text-xl text-rose-600">{error}</p>
            </div>
          ) : packages.length === 0 ? (
            <div className="rounded-3xl bg-white border border-slate-200 p-12 text-center shadow-sm">
              <p className="text-xl text-slate-600">No safari packages are available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((item) => (
                <PackageCard
                  key={item.id}
                  image={item.featured_image_url ?? ""}
                  title={item.title}
                  location={item.location}
                  duration={item.duration}
                  price={formatUSD(item.price)}
                  safariType={item.safari_type}
                  link={`/packages/${item.id}`}
                  ctaLabel="View Package"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
