import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">

          <Link to="/" className="hover:text-green-400 transition duration-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-green-400 transition duration-300">
            About
          </Link>

          <Link to="/destinations" className="hover:text-green-400 transition duration-300">
            Destinations
          </Link>

          <Link to="/packages" className="hover:text-green-400 transition duration-300">
            Packages
          </Link>

          <Link to="/gallery" className="hover:text-green-400 transition duration-300">
            Gallery
          </Link>

          <Link to="/contact" className="hover:text-green-400 transition duration-300">
            Contact
          </Link>

        </nav>

        {/* CTA */}
        <Button>
          Book Safari
        </Button>

      </div>

    </header>
  );
}