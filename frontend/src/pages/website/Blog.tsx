import { blogPosts } from "../../data/blogData";
import BlogCard from "../../components/blog/BlogCard";

export default function Blog() {
  const featuredPost = blogPosts[0];

  return (
    <main className="bg-stone-50 min-h-screen">

      {/* Hero */}
      <section className="bg-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <span className="uppercase tracking-widest text-green-200 font-semibold">
            JOLUKAY Africa Safaris
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-4">
            Safari Blog
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-green-100">
            Discover safari tips, wildlife stories, destination guides and
            expert travel advice to help you plan your unforgettable African adventure.
          </p>

        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Featured Article
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-lg overflow-hidden">

          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-full object-cover"
          />

          <div className="p-10">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              {featuredPost.category}
            </span>

            <h3 className="text-4xl font-bold mt-6">
              {featuredPost.title}
            </h3>

            <p className="text-gray-600 mt-6">
              {featuredPost.excerpt}
            </p>

            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl transition">
              Read Full Article
            </button>

          </div>

        </div>

      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-bold">
            Latest Articles
          </h2>

          <span className="text-gray-500">
            {blogPosts.length} Articles
          </span>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-700 py-24">

        <div className="max-w-4xl mx-auto text-center px-8">

          <h2 className="text-5xl font-bold text-white">
            Ready for Your African Adventure?
          </h2>

          <p className="text-green-100 mt-6 text-lg">
            Let our safari specialists create a personalized itinerary tailored
            to your travel style and budget.
          </p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition">
            Request Free Safari Quote
          </button>

        </div>

      </section>

    </main>
  );
}