import { Link } from "react-router-dom";
import type { BlogPost } from "../../data/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>

        <h2 className="text-2xl font-bold text-slate-900 mt-4">
          {post.title}
        </h2>

        <div className="flex gap-4 text-sm text-gray-500 mt-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <p className="text-gray-600 mt-4">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg transition"
        >
          Read Article →
        </Link>

      </div>
    </article>
  );
}