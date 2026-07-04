import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold">
              JOLUKAY AFRICA SAFARIS
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              Luxury African Safaris across East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              📞 +254 111 954 622
            </p>

            <p className="text-gray-400 mt-2">
              ✉ info@jolukayafricasafaris.com
            </p>

            <p className="text-gray-400 mt-2">
              📍 Nakuru, Kenya
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-green-700 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-green-700 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-green-700 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-green-700 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
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