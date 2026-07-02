export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-bold">
              JOLUKAY
            </h2>

            <p className="text-green-500 tracking-widest mt-2">
              AFRICA SAFARIS
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Discover East Africa through unforgettable wildlife safaris,
              luxury adventures and tailor-made travel experiences.
            </p>

          </div>

          {/* Destinations */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Destinations
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Maasai Mara</li>
              <li>Amboseli</li>
              <li>Lake Nakuru</li>
              <li>Serengeti</li>
              <li>Zanzibar</li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Home</li>
              <li>About Us</li>
              <li>Packages</li>
              <li>Gallery</li>
              <li>Contact</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>📍 Nakuru, Kenya</p>

              <p>📞 +254 711 954 622</p>

              <p>✉️ info@jolukayafricasafaris.com</p>

              <p>🌍 www.jolukayafricasafaris.com</p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>
            © 2026 JOLUKAY Africa Safaris. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed with ❤️ in Kenya
          </p>

        </div>

      </div>

    </footer>
  );
}