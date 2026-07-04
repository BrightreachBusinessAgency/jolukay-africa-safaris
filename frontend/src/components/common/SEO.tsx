import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
};

export default function SEO({
  title,
  description,
  keywords = "",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />
    </Helmet>
  );
}