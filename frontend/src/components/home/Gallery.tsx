import { useEffect, useState } from "react";
import API_URL from "../../services/api";

interface GalleryImage {
  id: number;
  title: string | null;
  image_url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(Array.isArray(data) ? data : []))
      .catch(console.error);
  }, []);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <span className="uppercase tracking-widest text-green-700 font-semibold">
            Gallery
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Moments From Our Safaris
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Discover unforgettable wildlife encounters and breathtaking landscapes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.slice(0, 8).map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={image.image_url}
                alt={image.title ?? "Gallery"}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}