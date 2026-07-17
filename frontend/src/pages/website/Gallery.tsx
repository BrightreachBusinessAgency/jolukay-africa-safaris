import { useEffect, useState } from "react";
import API_URL from "../../services/api";

interface GalleryImage {
  id: number;
  title: string | null;
  image_url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/gallery`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Failed to load gallery");
        }

        const data = await res.json();
        setImages(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setImages([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="bg-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold">
            Safari Gallery
          </h1>

          <p className="mt-6 text-green-100 text-xl">
            Moments that inspire your next adventure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">

          {loading ? (
            <div className="text-center text-lg">
              Loading gallery...
            </div>
          ) : images.length === 0 ? (
            <div className="text-center text-lg">
              No gallery images available.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition"
                >
                  <img
                    src={`${API_URL.replace('/api', '')}${image.image_url}`}
                    alt={image.title ?? "Gallery Image"}
                    className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}