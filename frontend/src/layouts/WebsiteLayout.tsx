type Props = {
  children: React.ReactNode;
};

export default function WebsiteLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white">

      <header className="border-b">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold text-green-700">
            JOLUKAY
          </h1>

          <nav className="hidden md:flex gap-8">

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Destinations</a>

            <a href="#">Packages</a>

            <a href="#">Gallery</a>

            <a href="#">Blog</a>

            <a href="#">Contact</a>

          </nav>

          <button className="bg-green-700 text-white px-5 py-2 rounded-lg">
            Book Safari
          </button>

        </div>

      </header>

      {children}

      <footer className="border-t mt-20">

        <div className="max-w-7xl mx-auto py-10 text-center">

          © 2026 JOLUKAY AFRICA SAFARIS

        </div>

      </footer>

    </div>
  );
}