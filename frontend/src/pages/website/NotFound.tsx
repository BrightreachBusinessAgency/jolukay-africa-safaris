import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-stone-50 flex items-center justify-center px-8">

      <div className="max-w-3xl text-center">

        <h1 className="text-9xl font-extrabold text-green-700">
          404
        </h1>

        <h2 className="text-5xl font-bold mt-6">
          Oops! Page Not Found
        </h2>

        <p className="mt-6 text-xl text-gray-600 leading-8">
          The page you are looking for may have been moved,
          deleted or never existed.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link to="/">
            <Button>
              Back Home
            </Button>
          </Link>

          <Link to="/booking">
            <Button variant="secondary">
              Book a Safari
            </Button>
          </Link>

        </div>

      </div>

    </section>
  );
}