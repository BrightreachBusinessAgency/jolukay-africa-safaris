import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../../components/common/SEO";
import Button from "../../components/common/Button";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";
import type { Package } from "../../types/packages";

function formatUSD(value: number | string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(value));
}

export default function PackageDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchPackage = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/packages/${id}`);
        if (!response.ok) {
          throw new Error("Package not found.");
        }

        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError("Unable to load package details.");
        showToast("error", "Package detail could not be loaded.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id, showToast]);

  if (loading) {
    return (
      <section className="py-24 bg-white text-center">
        <p className="text-2xl font-semibold">Loading package details...</p>
      </section>
    );
  }

  if (error || !item) {
    return (
      <section className="py-24 bg-white text-center">
        <p className="text-2xl font-semibold text-rose-600">
          {error ?? "Package not found."}
        </p>
        <div className="mt-8">
          <Link to="/packages">
            <Button>Back to Packages</Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={`${item.title} | JOLUKAY Africa Safaris`}
        description={item.summary ?? "Explore this safari package."}
      />

      <section className="relative overflow-hidden">
        <div className="h-[280px] md:h-[320px] lg:h-[360px] bg-slate-900">
          <img
            src={item.featured_image_url ?? undefined}
            alt={item.title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="max-w-6xl mx-auto px-8 -mt-8 relative z-10">
          <div className="max-w-6xl mx-auto rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-slate-200">
           <div className="space-y-4">

  <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
    {item.safari_type ?? "Safari"}
  </span>

  <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
    {item.title}
  </h1>

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t pt-4">

    <p className="text-slate-600 text-lg">
      📍 {item.location}
    </p>

    <div className="text-left md:text-right">

      <p className="text-xs uppercase tracking-widest text-slate-500">
        Starting From
      </p>

      <p className="text-3xl font-bold text-emerald-700">
        {formatUSD(item.price)}
      </p>

    </div>

  </div>

</div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-8 pt-6 pb-16 space-y-12">
        <section className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
              <p className="mt-4 text-slate-600 leading-8">
                {item.summary ?? "This safari package delivers an unforgettable experience with wildlife, landscapes, and local culture."}
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900">What to expect</h3>
              <div className="mt-6 space-y-4 text-slate-600 leading-7">
                <p>
                  <strong>Duration:</strong> {item.duration}
                </p>
                <p>
                  <strong>Location:</strong> {item.location}
                </p>
                <p>
                  <strong>Safari type:</strong> {item.safari_type ?? "Comfort Safari"}
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Book this safari</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Request a quote and our safari experts will prepare a custom itinerary for your travel dates.
              </p>
              <Link to="/booking">
                <Button className="mt-6 w-full">Request Quote</Button>
              </Link>
            </div>

            <div className="rounded-3xl bg-blue-900 text-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">Ready to travel?</h3>
              <p className="mt-3 text-slate-100 leading-7">
                Contact our team for a tailored safari experience with luxury lodges, expert guides, and full support.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Itinerary</h3>
            <p className="mt-5 text-slate-600 leading-8 whitespace-pre-line">
              {item.itinerary || "A detailed safari itinerary will be provided after your quote is confirmed."}
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Inclusions</h3>
              <p className="mt-5 text-slate-600 leading-8 whitespace-pre-line">
                {item.inclusions || "Accommodation, meals, park fees, and guided game drives included."}
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Exclusions</h3>
              <p className="mt-5 text-slate-600 leading-8 whitespace-pre-line">
                {item.exclusions || "International flights, visas, travel insurance, and personal expenses are excluded."}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
