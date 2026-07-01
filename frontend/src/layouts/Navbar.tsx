import { Link } from "react-router-dom";

import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link
            to="/"
            className="hover:text-green-700 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-green-700 transition"
          >
            About
          </Link>

          <Link
            to="/destinations"
            className="hover:text-green-700 transition"
          >
            Destinations
          </Link>

          <Link
            to="/packages"
            className="hover:text-green-700 transition"
          >
            Packages
          </Link>

          <Link
            to="/gallery"
            className="hover:text-green-700 transition"
          >
            Gallery
          </Link>

          <Link
            to="/blog"
            className="hover:text-green-700 transition"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-700 transition"
          >
            Contact
          </Link>

        </nav>

        {/* CTA */}
        <Button>
          Request Quote
        </Button>

      </div>
    </header>
  );
}