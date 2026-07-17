import { useEffect, useState } from "react";
import API_URL from "../../services/api";

export default function SocialSettings() {
  const token = localStorage.getItem("adminToken");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
    tiktok: "",
    whatsapp: "",
    seo_title: "",
    seo_description: "",
    seo_keywords: "",
    copyright_text: "",
  });

  useEffect(() => {
    fetch(`${API_URL}/admin/social-settings`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setForm({
          phone: data.phone ?? "",
          email: data.email ?? "",
          facebook: data.facebook ?? "",
          instagram: data.instagram ?? "",
          linkedin: data.linkedin ?? "",
          twitter: data.twitter ?? "",
          youtube: data.youtube ?? "",
          tiktok: data.tiktok ?? "",
          whatsapp: data.whatsapp ?? "",
          seo_title: data.seo_title ?? "",
          seo_description: data.seo_description ?? "",
          seo_keywords: data.seo_keywords ?? "",
          copyright_text: data.copyright_text ?? "",
        });
      })
      .finally(() => setLoading(false));
  }, [token]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`${API_URL}/admin/social-settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to save settings.");
      }

      alert("Settings saved successfully.");
    } catch (error) {
      alert("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading settings...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Website Settings
        </h1>
        <p className="text-slate-500 mt-2">
          Manage contact information, social media links and SEO settings.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Social Media</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="facebook"
            value={form.facebook}
            onChange={handleChange}
            placeholder="Facebook URL"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
            placeholder="Instagram URL"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="twitter"
            value={form.twitter}
            onChange={handleChange}
            placeholder="X (Twitter) URL"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="youtube"
            value={form.youtube}
            onChange={handleChange}
            placeholder="YouTube URL"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="tiktok"
            value={form.tiktok}
            onChange={handleChange}
            placeholder="TikTok URL"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp Number or Link"
            className="border rounded-xl p-3"
          />
        </div>
      </div>

      {/* SEO */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6">SEO Settings</h2>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Website Title</label>
            <input
              type="text"
              name="seo_title"
              value={form.seo_title}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Meta Description</label>
            <textarea
              rows={4}
              name="seo_description"
              value={form.seo_description}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Meta Keywords</label>
            <textarea
              rows={3}
              name="seo_keywords"
              value={form.seo_keywords}
              onChange={handleChange}
              placeholder="Safari, Kenya, Tours, Maasai Mara..."
              className="w-full border rounded-xl p-3"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Footer</h2>

        <textarea
          rows={3}
          name="copyright_text"
          value={form.copyright_text}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          placeholder="© 2026 JOLUKAY Africa Safaris. All Rights Reserved."
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </form>
  );
}