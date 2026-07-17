import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import API_URL from "../../services/api";
import { useToast } from "../../components/common/ToastContext";

const safariTypes = [
  "Jeep Safari",
  "Land Cruiser Safari",
  "Fly-in Safari",
  "Hot Air Balloon Safari",
  "Walking Safari",
  "Group Safari",
  "Helicopter Safari",
];

export default function CreatePackage() {
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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    if (!featuredImage) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(featuredImage);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [featuredImage]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const { name, type, value } = target;
    const checked = type === "checkbox" ? target.checked : value;

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
    setLoading(true);
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
      const response = await fetch(`${API_URL}/admin/packages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: data,
      });

      if (!response.ok) {
        const payload = await response.json();
        if (payload?.errors) {
          setErrors(payload.errors);
          showToast("error", "Please resolve the highlighted fields.");
          return;
        }
        throw new Error(payload?.message || "Could not create package.");
      }

      showToast("success", "Package created successfully.");
      navigate("/admin/packages");
    } catch (error) {
      showToast("error", (error as Error).message || "Create package failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Create New Package</h1>
        <p className="mt-2 text-slate-600">Add a new safari package with image upload, pricing and itinerary details.</p>
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
              placeholder="Kenya Safari Adventure"
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
              placeholder="Maasai Mara, Kenya"
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
              placeholder="5 Days / 4 Nights"
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
              placeholder="1599.00"
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
            placeholder="Short overview of the safari package."
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
              placeholder="Describe the daily itinerary."
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
              placeholder="What is included in the package?"
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
            placeholder="What is excluded from the package?"
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
          <Button type="submit" disabled={loading} className="w-full md:w-auto">
            {loading ? "Saving package..." : "Create Package"}
          </Button>
        </div>
      </form>
    </div>
  );
}