type PackageCardProps = {
  title: string;
  location: string;
  duration: string;
  price: string;
};

export default function PackageCard({
  title,
  location,
  duration,
  price,
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border hover:shadow-2xl transition">

      <div className="h-56 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">
          Safari Image
        </p>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        <p className="mt-2">
          🕒 {duration}
        </p>

        <p className="text-3xl font-bold text-green-700 mt-4">
          {price}
        </p>

        <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl">
          Book Safari
        </button>

      </div>

    </div>
  );
}