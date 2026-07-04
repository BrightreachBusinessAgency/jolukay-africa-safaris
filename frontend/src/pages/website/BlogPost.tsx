import { useParams, Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { blogPosts } from "../../data/blogData";

export default function BlogPost() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Article Not Found
          </h1>

          <p className="text-gray-600 mb-8">
            The article you are looking for doesn't exist.
          </p>

          <Link to="/blog">
            <Button>
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative h-[500px]">

        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-5xl mx-auto px-8 text-white">

            <span className="bg-green-600 px-5 py-2 rounded-full">
              {post.category}
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-8 text-green-200">

              <span>{post.author}</span>

              <span>{post.date}</span>

              <span>{post.readingTime}</span>

            </div>

          </div>

        </div>

      </section>

      {/* Article */}

      <section className="max-w-4xl mx-auto py-24 px-8">

        <p className="text-lg leading-9 text-gray-700 whitespace-pre-line">
          {post.content}
        </p>

        <div className="mt-16 border-t pt-12">

          <h2 className="text-4xl font-bold">
            Ready For Your Own African Safari?
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            Speak with our safari experts and let us design a personalized
            itinerary for your unforgettable East African adventure.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link to="/booking">
              <Button>
                Request Safari Quote
              </Button>
            </Link>

            <Link to="/blog">
              <Button variant="secondary">
                Back to Blog
              </Button>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}