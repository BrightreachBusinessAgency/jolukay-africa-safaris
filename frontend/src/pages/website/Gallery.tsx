import gallery1 from "../../assets/gallery/gallery-1.jpg";
import gallery2 from "../../assets/gallery/gallery-2.jpg";
import gallery3 from "../../assets/gallery/gallery-3.jpg";
import gallery4 from "../../assets/gallery/gallery-4.jpg";
import gallery5 from "../../assets/gallery/gallery-5.jpg";
import gallery6 from "../../assets/gallery/gallery-6.jpg";
import gallery7 from "../../assets/gallery/gallery-7.jpg";
import gallery8 from "../../assets/gallery/gallery-8.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

export default function Gallery() {
  return (
    <>
      {/* Hero */}
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

      {/* Gallery Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}