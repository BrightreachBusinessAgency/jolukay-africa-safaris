import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
                  `transition font-medium ${
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

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link to="/booking">
              <Button>
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden text-white"
          >
            <Menu size={30} />
          </button>

        </div>

      </header>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 bg-black/80">

          <div className="bg-white w-80 h-full p-8 shadow-xl">

            <div className="flex justify-between items-center mb-10">

              <Logo />

              <button onClick={() => setMobileMenu(false)}>
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
                    `text-lg font-medium ${
                      isActive
                        ? "text-green-700"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/booking"
                onClick={() => setMobileMenu(false)}
                className="mt-8"
              >
                <Button className="w-full">
                  Request Quote
                </Button>
              </Link>

            </nav>

          </div>

        </div>
      )}
    </>
  );
}