import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#">Home</a>

          <a href="#">About</a>

          <a href="#">Destinations</a>

          <a href="#">Packages</a>

          <a href="#">Gallery</a>

          <a href="#">Blog</a>

          <a href="#">Contact</a>

        </nav>

        <Button>
          Book Safari
        </Button>

      </div>
    </header>
  );
}