import { Link } from "react-router-dom";
import Button from "../common/Button";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
};

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">

      <div className="overflow-hidden">

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      <div className="p-6">

        <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
          {post.category}
        </span>

        <h3 className="text-2xl font-bold mt-5 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 mt-4 leading-7 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-8">

          <Link to={`/blog/${post.slug}`}>
            <Button>
              Read More
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}