type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-green-700 font-semibold">
        JOLUKAY AFRICA SAFARIS
      </span>

      <h2 className="text-5xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mt-6">
        {subtitle}
      </p>

    </div>
  );
}