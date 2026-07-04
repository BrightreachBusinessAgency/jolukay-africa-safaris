import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Experiences", path: "/experiences" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-5">

          {/* Logo */}

          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 font-medium ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* Desktop CTA */}

          <div className="hidden lg:block">

            <Link to="/booking">

              <Button className="flex items-center gap-2">

                Request Quote

                <ChevronRight size={18} />

              </Button>

            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={30} />
          </button>

        </div>

      </header>

      {/* ================= MOBILE MENU ================= */}

      {mobileMenu && (

        <div
          className="fixed inset-0 bg-black/70 z-50"
          onClick={() => setMobileMenu(false)}
        >

          <div
            className="bg-white w-80 max-w-full h-full p-8 shadow-2xl animate-[slideIn_.3s_ease]"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between mb-10">

              <Logo />

              <button
                onClick={() => setMobileMenu(false)}
                className="text-gray-700 hover:text-red-500 transition"
              >
                <X size={30} />
              </button>

            </div>

            <nav className="flex flex-col gap-6">

              {links.map((link) => (

                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition ${
                      isActive
                        ? "text-green-700"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              ))}

            </nav>

            <div className="mt-10">

              <Link
                to="/booking"
                onClick={() => setMobileMenu(false)}
              >

                <Button className="w-full flex items-center justify-center gap-2">

                  Request Quote

                  <ChevronRight size={18} />

                </Button>

              </Link>

            </div>

          </div>

        </div>

      )}
    </>
  );
}