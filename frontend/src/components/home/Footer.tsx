export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold">
              JOLUKAY AFRICA SAFARIS
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              Luxury African Safaris across East Africa.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">📞 +254 111 954 622</p>
            <p className="text-gray-400 mt-2">✉ info@jolukayafricasafaris.com</p>
            <p className="text-gray-400 mt-2">📍 Nakuru, Kenya</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600"
              >
                FB
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600"
              >
                IG
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600"
              >
                YT
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center hover:bg-green-600"
              >
                IN
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          © 2026 JOLUKAY Africa Safaris. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}