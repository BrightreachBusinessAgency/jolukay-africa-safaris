type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}