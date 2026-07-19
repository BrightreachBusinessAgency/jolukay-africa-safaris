import { MapPin, Clock3, Star } from "lucide-react";

type PackageCardProps = {
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  safariType?: string;
  link?: string;
  ctaLabel?: string | null;
};

export default function PackageCard({
  image,
  title,
  location,
  duration,
  price,
  safariType,
  link,
  ctaLabel = "View Details",
}: PackageCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Package Image */}
      <div className="overflow-hidden h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {safariType && (
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              {safariType}
            </span>
          )}

          <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Featured Safari
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mt-4 text-slate-900">
          {title}
        </h3>

        {/* Location */}
        <p className="flex items-center gap-2 text-gray-500 mt-4">
          <MapPin size={18} className="text-green-700" />
          {location}
        </p>

        {/* Duration */}
        <p className="flex items-center gap-2 text-gray-500 mt-2">
          <Clock3 size={18} className="text-green-700" />
          {duration}
        </p>

        {/* Price + Rating */}
        <div className="flex justify-between items-end mt-6">
          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4 className="text-3xl font-bold text-green-700">
              {price}
            </h4>
          </div>

          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <Star
              size={18}
              fill="currentColor"
              strokeWidth={1.5}
            />
            <span>4.9</span>
          </div>
        </div>

        {/* Optional Button */}
        {ctaLabel && (
          link ? (
            <a
              href={link}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-green-700 px-6 py-4 text-white font-semibold transition hover:bg-green-800"
            >
              {ctaLabel}
            </a>
          ) : (
            <button
              className="mt-8 w-full rounded-full bg-green-700 px-6 py-4 text-white font-semibold transition hover:bg-green-800"
            >
              {ctaLabel}
            </button>
          )
        )}

      </div>

    </div>
  );
}