import { MapPin, Clock3, Star } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Package Image */}
      <div className="h-72 overflow-hidden">

        <img
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/800x600?text=Safari+Package";
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">

          {safariType && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {safariType}
            </span>
          )}

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            Featured Safari
          </span>

        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Location */}
        <p className="mt-4 flex items-center gap-2 text-gray-500">
          <MapPin
            size={18}
            className="text-green-700"
          />
          {location}
        </p>

        {/* Duration */}
        <p className="mt-2 flex items-center gap-2 text-gray-500">
          <Clock3
            size={18}
            className="text-green-700"
          />
          {duration}
        </p>

        {/* Price */}
        <div className="mt-6 flex items-end justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4 className="text-3xl font-bold text-green-700">
              {price}
            </h4>

          </div>

          <div className="flex items-center gap-1 font-semibold text-yellow-500">

            <Star
              size={18}
              fill="currentColor"
              strokeWidth={1.5}
            />

            <span>4.9</span>

          </div>

        </div>

        {/* Button */}
        {ctaLabel && link && (

          <Link
            to={link}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            {ctaLabel}
          </Link>

        )}

        {ctaLabel && !link && (

          <button
            className="mt-8 w-full rounded-full bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            {ctaLabel}
          </button>

        )}

      </div>

    </div>
  );
}