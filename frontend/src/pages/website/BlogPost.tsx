import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../data/blogData";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto py-24 px-8 text-center">
        <h1 className="text-5xl font-bold">Article Not Found</h1>

        <Link
          to="/blog"
          className="inline-block mt-8 bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-8">

          <span className="bg-green-600 px-4 py-2 rounded-full">
            {post.category}
          </span>

          <h1 className="text-5xl font-bold mt-6">
            {post.title}
          </h1>

          <div className="flex gap-6 mt-6 text-green-200">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readingTime}</span>
          </div>

        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-8 py-12">

        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-2xl shadow-lg"
        />

      </section>

      {/* Article */}
      <section className="max-w-4xl mx-auto px-8 pb-24">

        <p className="text-lg leading-9 text-gray-700 whitespace-pre-line">
          {post.content}
        </p>

        <div className="mt-16 border-t pt-10">

          <h3 className="text-3xl font-bold">
            Ready to Experience Africa?
          </h3>

          <p className="text-gray-600 mt-4">
            Contact JOLUKAY Africa Safaris today and let us plan your dream safari.
          </p>

          <Link
            to="/booking"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl transition"
          >
            Request Free Safari Quote
          </Link>

        </div>

      </section>

    </main>
  );
}