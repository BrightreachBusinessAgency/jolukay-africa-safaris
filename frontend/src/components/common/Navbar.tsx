import { Link } from "react-router-dom";

import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link
            to="/"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-green-700 transition-colors duration-300"
          >
            About
          </Link>

          <Link
            to="/packages"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Packages
          </Link>

          <Link
            to="/destinations"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Destinations
          </Link>

          <Link
            to="/gallery"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-700 transition-colors duration-300"
          >
            Contact
          </Link>

        </nav>

        {/* CTA */}
        <Link to="/booking">
          <Button>
            Request Quote
          </Button>
        </Link>

      </div>
    </header>
  );
}