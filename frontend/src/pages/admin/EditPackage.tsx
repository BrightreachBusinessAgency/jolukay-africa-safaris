import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";
import type { Package } from "../../types/packages";

const safariTypes = [
  "Jeep Safari",
  "Land Cruiser Safari",
  "Fly-in Safari",
  "Hot Air Balloon Safari",
  "Walking Safari",
  "Group Safari",
  "Helicopter Safari",
];

export default function EditPackage() {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    location: "",
    safari_type: safariTypes[0],
    duration: "",
    price: "",
    summary: "",
    itinerary: "",
    inclusions: "",
    exclusions: "",
    published: false,
  });
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    const loadPackage = async () => {
      if (!id) return;
      const authToken = localStorage.getItem("adminToken");

      if (!authToken) {
        navigate("/admin/login");
        return;
      }

      try {
        const response = await fetch(`${API_URL}/admin/packages/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Package not found.");
        }

        const data: Package = await response.json();
        setForm({
          title: data.title,
          location: data.location,
          safari_type: data.safari_type ?? safariTypes[0],
          duration: data.duration,
          price: data.price.toString(),
          summary: data.summary ?? "",
          itinerary: data.itinerary ?? "",
          inclusions: data.inclusions ?? "",
          exclusions: data.exclusions ?? "",
          published: data.published,
        });
        setPreview(data.featured_image_url);
      } catch (error) {
        showToast("error", (error as Error).message || "Unable to load package.");
      } finally {
        setLoading(false);
      }
    };

    loadPackage();
  }, [id, navigate, showToast]);

  useEffect(() => {
    if (!featuredImage) {
      return;
    }

    const url = URL.createObjectURL(featuredImage);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [featuredImage]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement & { name: string };
    const { name, type, value } = target;
    const checked = (target as HTMLInputElement).checked;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setFeaturedImage(file);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!id) return;

    setSaving(true);
    setErrors({});

    const authToken = localStorage.getItem("adminToken");
    if (!authToken) {
      navigate("/admin/login");
      return;
    }

    const data = new FormData();
    data.append("title", form.title);
    data.append("location", form.location);
    data.append("safari_type", form.safari_type);
    data.append("duration", form.duration);
    data.append("price", form.price);
    data.append("summary", form.summary);
    data.append("itinerary", form.itinerary);
    data.append("inclusions", form.inclusions);
    data.append("exclusions", form.exclusions);
    data.append("published", form.published ? "1" : "0");
    if (featuredImage) {
      data.append("featured_image", featuredImage);
    }

    try {
const response = await fetch(`${API_URL}/admin/packages/${id}`, {
    method: "PUT",
    headers: {
        Authorization: `Bearer ${authToken}`,
    },
    body: data,
});
      if (!response.ok) {
        const payload = await response.json();
        if (payload?.errors) {
          setErrors(payload.errors);
          showToast("error", "Please fix the highlighted fields.");
          return;
        }
        throw new Error(payload?.message || "Unable to update package.");
      }

      showToast("success", "Package updated successfully.");
      navigate("/admin/packages");
    } catch (error) {
      showToast("error", (error as Error).message || "Update failed.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-12 shadow-sm text-center text-slate-600">
        Loading package details...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Edit Package</h1>
        <p className="mt-2 text-slate-600">Update the package settings, pricing, and featured image.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Package Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              required
            />
            {errors.title && <p className="mt-2 text-sm text-rose-600">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              required
            />
            {errors.location && <p className="mt-2 text-sm text-rose-600">{errors.location}</p>}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Safari Type</label>
            <select
              name="safari_type"
              value={form.safari_type}
              onChange={handleChange}
              className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
            >
              {safariTypes.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.safari_type && <p className="mt-2 text-sm text-rose-600">{errors.safari_type}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700">Duration</label>
            <input
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              required
            />
            {errors.duration && <p className="mt-2 text-sm text-rose-600">{errors.duration}</p>}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Price (USD)</label>
            <input
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={form.price}
              onChange={handleChange}
              className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
              required
            />
            {errors.price && <p className="mt-2 text-sm text-rose-600">{errors.price}</p>}
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <input
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handleChange}
                className="h-5 w-5 rounded border-slate-300 text-green-700 focus:ring-green-500"
              />
              Publish package
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">Summary</label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            rows={4}
            className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />
          {errors.summary && <p className="mt-2 text-sm text-rose-600">{errors.summary}</p>}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Itinerary</label>
            <textarea
              name="itinerary"
              value={form.itinerary}
              onChange={handleChange}
              rows={6}
              className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
            {errors.itinerary && <p className="mt-2 text-sm text-rose-600">{errors.itinerary}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700">Inclusions</label>
            <textarea
              name="inclusions"
              value={form.inclusions}
              onChange={handleChange}
              rows={6}
              className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
            />
            {errors.inclusions && <p className="mt-2 text-sm text-rose-600">{errors.inclusions}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">Exclusions</label>
          <textarea
            name="exclusions"
            value={form.exclusions}
            onChange={handleChange}
            rows={4}
            className="mt-3 w-full rounded-3xl border border-slate-300 px-5 py-4 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />
          {errors.exclusions && <p className="mt-2 text-sm text-rose-600">{errors.exclusions}</p>}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold text-slate-700">Featured Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-3 w-full text-sm text-slate-700"
            />
            {errors.featured_image && <p className="mt-2 text-sm text-rose-600">{errors.featured_image}</p>}
          </div>
          {preview && (
            <div className="rounded-3xl overflow-hidden border border-slate-200">
              <img src={preview} alt="Preview" className="h-48 w-full object-cover" />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={saving} className="w-full md:w-auto">
            {saving ? "Saving changes..." : "Update Package"}
          </Button>
        </div>
      </form>
    </div>
  );
}