type PackageCardProps = {
  image: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  safariType?: string;
  link?: string;
  ctaLabel?: string;
};

export default function PackageCard({
  image,
  title,
  location,
  duration,
  price,
  safariType,
  link,
  ctaLabel = "Request Quote",
}: PackageCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="overflow-hidden h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          {safariType ? (
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              {safariType}
            </span>
          ) : null}

          <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            Featured Safari
          </span>
        </div>

        <h3 className="text-2xl font-bold mt-4 text-slate-900">{title}</h3>

        <p className="text-gray-500 mt-3">?? {location}</p>
        <p className="text-gray-500 mt-2">?? {duration}</p>

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-sm text-gray-500">Starting From</p>
            <h4 className="text-3xl font-bold text-green-700">{price}</h4>
          </div>

          <span className="text-yellow-500 text-lg">? 4.9</span>
        </div>

        {link ? (
          <a
            href={link}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-green-700 px-6 py-4 text-white font-semibold transition hover:bg-green-800"
          >
            {ctaLabel}
          </a>
        ) : (
          <button className="mt-8 w-full rounded-full bg-green-700 px-6 py-4 text-white font-semibold transition hover:bg-green-800">
            {ctaLabel}
          </button>
        )}
      </div>
    </div>
  );
}
