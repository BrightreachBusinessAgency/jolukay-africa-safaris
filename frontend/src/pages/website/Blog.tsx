import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import BlogCard from "../../components/blog/BlogCard";
import { blogPosts } from "../../data/blogData";

export default function Blog() {
  const featuredPost = blogPosts[0];

  return (
    <main className="bg-stone-50 min-h-screen">

      {/* Hero */}

      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-8 text-center">

          <span className="uppercase tracking-widest text-green-200 font-semibold">
            JOLUKAY Africa Safaris
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-5">
            Safari Blog
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-green-100 leading-8">
            Discover safari tips, wildlife stories, destination guides,
            conservation insights and expert travel advice to help you plan
            the perfect African safari experience.
          </p>

        </div>

      </section>

      {/* Featured */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-bold">
            Featured Story
          </h2>

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            Editor's Pick
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">

          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-full object-cover"
          />

          <div className="p-10 flex flex-col justify-center">

            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold w-fit">
              {featuredPost.category}
            </span>

            <h2 className="text-4xl font-bold mt-6">
              {featuredPost.title}
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              {featuredPost.excerpt}
            </p>

            <div className="mt-10">

              <Link to={`/blog/${featuredPost.slug}`}>
                <Button>
                  Read Full Article
                </Button>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* Latest */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="flex flex-wrap justify-between items-center mb-12">

          <div>

            <h2 className="text-4xl font-bold">
              Latest Articles
            </h2>

            <p className="text-gray-500 mt-2">
              Travel inspiration and safari planning guides.
            </p>

          </div>

          <span className="bg-white shadow px-5 py-3 rounded-full font-semibold">
            {blogPosts.length} Articles
          </span>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 py-24">

        <div className="max-w-4xl mx-auto text-center px-8">

          <h2 className="text-5xl font-bold text-white">
            Ready For Your African Adventure?
          </h2>

          <p className="text-green-100 mt-6 text-lg leading-8">
            Let our safari specialists design a tailor-made itinerary
            matching your travel style, interests and budget.
          </p>

          <div className="mt-10">

            <Link to="/booking">
              <Button>
                Request Free Safari Quote
              </Button>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}