import Button from "./Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              JOLUKAY
            </h1>
            <p className="text-xs tracking-widest text-gray-500">
              AFRICA SAFARIS
            </p>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <a href="#" className="hover:text-green-700 font-medium">
              Home
            </a>

            <a href="#" className="hover:text-green-700 font-medium">
              About
            </a>

            <a href="#" className="hover:text-green-700 font-medium">
              Packages
            </a>

            <a href="#" className="hover:text-green-700 font-medium">
              Destinations
            </a>

            <a href="#" className="hover:text-green-700 font-medium">
              Gallery
            </a>

            <a href="#" className="hover:text-green-700 font-medium">
              Contact
            </a>

          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button>
              Request Quote
            </Button>
          </div>

        </div>

      </div>
    </header>
  );
}