import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254799230227?text=Hello%20JOLUKAY%20Africa%20Safaris,%20I%20would%20like%20to%20book%20a%20safari."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-28 right-6 z-40"
    >
      <div className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105">

        <span className="text-2xl text-white"><FaWhatsapp size={24} /></span>

        <span className="font-semibold hidden md:inline">
          WhatsApp
        </span>

      </div>
    </a>
  );
}