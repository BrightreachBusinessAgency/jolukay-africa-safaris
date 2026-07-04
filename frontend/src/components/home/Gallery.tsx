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
            Discover unforgettable wildlife encounters, breathtaking landscapes,
            luxury safari vehicles and memorable adventures across East Africa.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={image}
                alt={`Safari ${index + 1}`}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}